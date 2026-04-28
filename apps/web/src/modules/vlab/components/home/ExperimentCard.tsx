import { motion } from 'motion/react'
import { ChevronRight } from 'lucide-react'

export const ExperimentCard = ({
  title,
  desc,
  icon,
  onClick
}: {
  title: string
  desc: string
  icon: React.ReactNode
  onClick: () => void
}) => {
  return (
    <motion.button
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={onClick}
      className="group p-10 rounded-[32px] border border-white/5 bg-[#0F0F12] text-left relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-lab-accent/5" />

      <div className="relative z-10">
        <div className="mb-6 p-4 bg-black/40 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform inline-block">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 flex justify-between uppercase">
          {title}
          <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 text-lab-accent" />
        </h3>

        <p className="text-white/40 text-sm italic">{desc}</p>
      </div>
    </motion.button>
  )
}