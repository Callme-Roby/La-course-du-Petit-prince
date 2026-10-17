"use client";

import Image from "next/image";

export default function BackToTop({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="visually-hidden">Revenir en haut de la page</span>
      <Image src="/icons/back-to-top.svg" alt="" width={59} height={59} />
    </button>
  );
}
