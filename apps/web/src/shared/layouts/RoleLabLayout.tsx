import { NavLink, Outlet } from 'react-router-dom'
import TopNavbar from '../../modules/public/components/TopNavbar'
import Footer from '../../modules/public/components/Footer'

interface RoleLabLayoutProps {
  title: string
}

export function RoleLabLayout({ title }: RoleLabLayoutProps) {
  const isAdminLayout = title.toLowerCase().includes('admin')
  const navItems = isAdminLayout
    ? [
        { to: '.', label: 'Command Center', end: true },
        { to: 'feedback', label: 'User Feedback', end: false },
        { to: '.', label: 'Laboratory Modules', end: true }
      ]
    : [
        { to: '.', label: 'Command Center', end: true },
        { to: '.', label: 'Laboratory Modules', end: true }
      ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-[#08090f] text-on-surface particle-bg">
      <TopNavbar />
      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-6 px-4 pb-12 pt-28">
        <aside className="hidden w-72 rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-xl lg:block">
          <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">{title}</p>
          <div className="mt-4 space-y-2 text-sm text-on-surface-variant">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `block rounded-lg border px-3 py-2 transition ${isActive ? 'border-orange-400/70 text-orange-300' : 'border-white/10'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
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
