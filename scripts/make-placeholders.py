#!/usr/bin/env python3
"""Génère des images de remplacement (gris + libellé) pour chaque entrée de /figma-assets/*.json
dont le fichier n'existe pas encore. Les vraies images s'obtiennent avec `npm run assets:figma`.

Usage : python3 scripts/make-placeholders.py [--force]
"""
import json, pathlib, sys
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
force = "--force" in sys.argv

def font(size):
    for p in ["/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", "/Library/Fonts/Arial.ttf"]:
        try:
            return ImageFont.truetype(p, size)
        except OSError:
            pass
    return ImageFont.load_default()

for manifest in sorted((ROOT / "figma-assets").glob("*.json")):
    for a in json.loads(manifest.read_text())["assets"]:
        out = ROOT / a["file"]
        if out.exists() and not force:
            continue
        out.parent.mkdir(parents=True, exist_ok=True)
        w, h = int(a.get("width", 1200)), int(a.get("height", 800))
        label = a.get("label") or out.stem.replace("-", " ")
        if out.suffix == ".svg":
            out.write_text(
                f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">'
                f'<rect width="100%" height="100%" rx="8" fill="#e9e7e1"/>'
                f'<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" '
                f'font-family="Arial" font-size="{max(10, min(w, h) // 8)}" fill="#9a968c">{label}</text></svg>'
            )
            continue
        # limite la taille des fichiers de remplacement
        scale = min(1.0, 1600 / max(w, h))
        w, h = max(1, int(w * scale)), max(1, int(h * scale))
        img = Image.new("RGB", (w, h), (233, 231, 225))
        d = ImageDraw.Draw(img)
        f = font(max(12, min(w, h) // 14))
        text = f"{label}"
        box = d.textbbox((0, 0), text, font=f)
        d.text(((w - box[2]) / 2, (h - box[3]) / 2), text, fill=(154, 150, 140), font=f)
        if out.suffix.lower() in (".jpg", ".jpeg"):
            img.save(out, "JPEG", quality=70)
        else:
            img.save(out, "PNG", optimize=True)
        print("placeholder", out.relative_to(ROOT))
