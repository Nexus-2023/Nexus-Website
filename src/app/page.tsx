import {
  HomePage,
  WorkPage,
  AnnouncementPage,
  FeaturePage,
  TeamPage,
  YieldPage,
  DemoPage,
} from "@/components/pages"

import Footer from "@/components/ui/Footer"

export default function Home() {
  return (
    <>
      <HomePage />
      <WorkPage />
      <FeaturePage />
      <YieldPage />
      <DemoPage />
      <AnnouncementPage />
      <TeamPage />
      <Footer />
    </>
  )
}
