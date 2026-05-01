import { Outlet } from 'react-router-dom'
import TopNavbar from '../../modules/public/components/TopNavbar'
import Footer from '../../modules/public/components/Footer'

interface RoleLabLayoutProps {
  title: string
}

export function RoleLabLayout({ title }: RoleLabLayoutProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#08090f] text-on-surface particle-bg">
      <TopNavbar />
      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-6 px-4 pb-12 pt-28">
        <aside className="hidden w-72 rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl lg:block">
          <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">{title}</p>
          <div className="mt-4 space-y-2 text-sm text-on-surface-variant">
            <p className="rounded-lg border border-white/10 px-3 py-2">Command Center</p>
            <p className="rounded-lg border border-white/10 px-3 py-2">Analytics</p>
            <p className="rounded-lg border border-white/10 px-3 py-2">Laboratory Modules</p>
          </div>
        </aside>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
