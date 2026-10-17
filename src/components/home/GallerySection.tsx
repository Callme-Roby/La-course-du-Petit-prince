import GalleryMosaic from "@/components/sections/GalleryMosaic";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";
import { homeGallery } from "@/data/home";
import { routes } from "@/lib/site";
import styles from "./GallerySection.module.css";

/** Section "Retour en images" (2055:6117) : en-tête "tout voir" + mosaïque "card-galerie". */
export default function GallerySection() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <SectionHeader
          id="gallery-title"
          title="Retour en images"
          actions={
            <Button variant="secondary" tone="dark" href={`${routes.event}#galerie`}>
              Tout voir
            </Button>
          }
        />
      </div>
      <GalleryMosaic images={homeGallery} label="Retour en images" />
    </div>
  );
}
