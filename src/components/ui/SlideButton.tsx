import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import styles from "./SlideButton.module.css";

type SlideButtonProps = {
  direction: "prev" | "next";
} & Omit<ComponentPropsWithoutRef<"button">, "children">;

/** Composants Figma "Button - Previous slide" / "Button - Next slide" (54×54). */
export default function SlideButton({ direction, className, ...rest }: SlideButtonProps) {
  return (
    <button type="button" className={[styles.button, className].filter(Boolean).join(" ")} {...rest}>
      <span className="visually-hidden">{direction === "prev" ? "Précédent" : "Suivant"}</span>
      <Image src={`/icons/slide-${direction}.svg`} alt="" width={54} height={54} />
    </button>
  );
}
