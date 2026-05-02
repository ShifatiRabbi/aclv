import { Outlet } from 'react-router-dom'
import MarqueeBar from '../../modules/public/components/MarqueeBar'
import TopNavbar from '../../modules/public/components/TopNavbar'
import Footer from '../../modules/public/components/Footer'
import MobileBottomNav from '../../modules/public/components/MobileBottomNav'
import FAB from '../../modules/public/components/FAB'

export default function MainLayout() {
  return (
    <div id="scroll-container" className="flex min-h-dvh flex-col bg-background text-on-surface font-sans">
      <MarqueeBar />
      <TopNavbar />
      <main className="flex-1 overflow-visible pt-28">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
      <FAB />
    </div>
  )
}
