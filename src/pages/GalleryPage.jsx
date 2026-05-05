import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import SectionTitle from '@/components/ui/SectionTitle'
import GalleryFilter from '@/components/gallery/GalleryFilter'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import { GALLERY_ITEMS } from '@/constants/gallery'
import { useGalleryFilter } from '@/hooks/useGalleryFilter'

export default function GalleryPage() {
  const { active, setActive, filtered } = useGalleryFilter(GALLERY_ITEMS)

  return (
    <PageWrapper>
      <PageHero
        title="Galerie"
        subtitle="Photos & Vidéos — Plongez dans l'univers visuel d'APISAHI Group"
        breadcrumb="Galerie"
      />

      <section className="section-py bg-beige">
        <div className="container-custom">
          <SectionTitle
            tag="Notre galerie"
            title="Nos créations en images"
            subtitle="Découvrez nos réalisations, nos services et nos moments forts à travers cette galerie immersive."
            center
          />
          <GalleryFilter active={active} onSelect={setActive} />
          <GalleryGrid items={filtered} />
        </div>
      </section>
    </PageWrapper>
  )
}
