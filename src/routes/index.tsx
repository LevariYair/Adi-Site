import { createFileRoute } from '@tanstack/react-router'
import FeatureGrid from '../components/home/FeatureGrid'
import HeroSection from '../components/home/HeroSection'
import LeadGenSection from '../components/home/LeadGenSection'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureGrid />
      <LeadGenSection />
    </main>
  )
}
