#!/usr/bin/env node
/**
 * Télécharge les images de la maquette Figma dans /public/images.
 *
 * Les emplacements d'images sont décrits dans /figma-assets/*.json :
 *   { "file": "public/images/…", "imageRef": "<hash>" }               → image source d'origine (remplissage)
 *   { "file": "public/images/…", "node": "<id>", "format": "svg|png" } → rendu d'un calque (logos vectoriels)
 *
 * Usage :
 *   FIGMA_TOKEN=xxxx npm run assets:figma
 *   (jeton personnel : Figma → Settings → Security → Personal access tokens, scope "File content: read")
 */
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY ?? "nN8oaAtd121c8BmEZmUYO8";
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const MANIFEST_DIR = path.join(ROOT, "figma-assets");

if (!TOKEN) {
  console.error("✖ Variable FIGMA_TOKEN manquante.");
  process.exit(1);
}

async function api(url) {
  const res = await fetch(`https://api.figma.com/v1${url}`, { headers: { "X-Figma-Token": TOKEN } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
  return res.json();
}

async function download(url, file) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} en téléchargeant ${file}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const out = path.join(ROOT, file);
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, buf);
  return buf.length;
}

const only = process.argv.slice(2); // filtre optionnel : noms de manifestes (ex. "home")

const manifests = (await readdir(MANIFEST_DIR)).filter(
  (f) => f.endsWith(".json") && (only.length === 0 || only.includes(path.basename(f, ".json"))),
);
const assets = [];
for (const m of manifests) {
  const json = JSON.parse(await readFile(path.join(MANIFEST_DIR, m), "utf8"));
  for (const a of json.assets ?? []) assets.push({ ...a, manifest: m });
}
console.log(`→ ${assets.length} images dans ${manifests.length} manifeste(s)`);

// 1. Images sources (remplissages)
const fills = assets.filter((a) => a.imageRef);
if (fills.length) {
  const { meta } = await api(`/files/${FILE_KEY}/images`);
  for (const a of fills) {
    const url = meta.images[a.imageRef];
    if (!url) {
      console.warn(`⚠ imageRef introuvable : ${a.imageRef} (${a.file})`);
      continue;
    }
    const size = await download(url, a.file);
    console.log(`✔ ${a.file} (${Math.round(size / 1024)} Ko)`);
  }
}

// 2. Rendus de calques, groupés par format/échelle
const renders = assets.filter((a) => a.node);
const groups = new Map();
for (const a of renders) {
  const key = `${a.format ?? "png"}@${a.scale ?? 2}`;
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(a);
}
for (const [key, list] of groups) {
  const [format, scale] = key.split("@");
  for (let i = 0; i < list.length; i += 50) {
    const chunk = list.slice(i, i + 50);
    const ids = chunk.map((a) => a.node).join(",");
    const q = new URLSearchParams({ ids, format, ...(format === "svg" ? {} : { scale }) });
    const { images } = await api(`/images/${FILE_KEY}?${q}`);
    for (const a of chunk) {
      const url = images[a.node];
      if (!url) {
        console.warn(`⚠ rendu indisponible pour ${a.node} (${a.file})`);
        continue;
      }
      const size = await download(url, a.file);
      console.log(`✔ ${a.file} (${Math.round(size / 1024)} Ko)`);
    }
  }
}

console.log("Terminé. Pensez à commiter le dossier public/images.");
