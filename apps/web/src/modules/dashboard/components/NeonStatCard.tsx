import { motion } from 'motion/react'

interface NeonStatCardProps {
  label: string
  value: string
  hint: string
}

export function NeonStatCard({ label, value, hint }: NeonStatCardProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className="glass-panel rounded-2xl border border-primary-container/20 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-primary">{hint}</p>
    </motion.article>
  )
}
