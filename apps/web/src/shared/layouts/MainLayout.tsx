import { Outlet, useLocation } from 'react-router-dom'
import MarqueeBar from '../../modules/public/components/MarqueeBar'
import TopNavbar from '../../modules/public/components/TopNavbar'
import Footer from '../../modules/public/components/Footer'
import MobileBottomNav from '../../modules/public/components/MobileBottomNav'
import FAB from '../../modules/public/components/FAB'
import { FeedbackWidget } from '../../modules/feedback/components/FeedbackWidget'

export default function MainLayout() {
  const location = useLocation()
  const showFeedbackWidget =
    location.pathname.startsWith('/vlab') ||
    location.pathname.startsWith('/simulations') ||
    location.pathname.startsWith('/chemicals') ||
    location.pathname.startsWith('/elements') ||
    location.pathname.startsWith('/accessories')

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
      {showFeedbackWidget && <FeedbackWidget />}
    </div>
  )
}
