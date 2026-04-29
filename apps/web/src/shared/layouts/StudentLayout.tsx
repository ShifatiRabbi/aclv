import { Outlet } from 'react-router-dom'
import TopNavbar from '../../modules/public/components/TopNavbar'
import Footer from '../../modules/public/components/Footer'

export default function StudentLayout() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <TopNavbar />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 pb-12 pt-28">
        <aside className="hidden w-64 rounded-xl border border-outline-variant/40 bg-surface-container p-4 lg:block">
          <p className="text-xs uppercase tracking-wider text-on-surface-variant">Student dashboard</p>
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
