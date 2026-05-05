import PageWrapper from '@/components/layout/PageWrapper'
import HeroSlider from '@/components/home/HeroSlider'
import IntroSection from '@/components/home/IntroSection'
import SubsidiariesGrid from '@/components/home/SubsidiariesGrid'
import CtaBanner from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSlider />
      <IntroSection />
      <SubsidiariesGrid />
      <CtaBanner />
    </PageWrapper>
  )
}
