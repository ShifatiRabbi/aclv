import type { PropsWithChildren } from 'react'
import { motion } from 'motion/react'
import { Beaker, Orbit } from 'lucide-react'

interface AuthShellProps extends PropsWithChildren {
  title: string
  subtitle: string
}

export function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#090a10] text-on-surface particle-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.15),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_35%,rgba(255,122,24,0.05))]" />

      <div className="relative z-10 grid min-h-[100dvh] md:grid-cols-2">
        <div className="hidden border-r border-white/10 p-10 md:flex md:flex-col md:justify-between">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2">
            <Beaker className="h-4 w-4 text-primary-container" />
            <span className="text-xs uppercase tracking-[0.22em] text-on-surface-variant">REAXORIUM LAB OS</span>
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="glass-panel rounded-3xl border border-white/15 p-8"
          >
            <Orbit className="mb-3 h-10 w-10 text-primary-container" />
            <p className="text-lg font-semibold text-white">Advanced chemistry simulation access channel</p>
            <p className="mt-3 text-sm text-on-surface-variant">
              Authenticate to control experiments, assignments, and institutional lab analytics.
            </p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel w-full max-w-xl rounded-3xl border border-white/10 p-6 md:p-8"
          >
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <p className="mt-2 text-sm text-on-surface-variant">{subtitle}</p>
            <div className="mt-6">{children}</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
