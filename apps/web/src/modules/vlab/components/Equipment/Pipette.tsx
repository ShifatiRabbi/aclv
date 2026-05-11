import React from 'react'
import { motion } from 'motion/react'

interface PipetteProps {
  isActive: boolean
}

export const Pipette: React.FC<PipetteProps> = ({ isActive }) => {
  return (
    <motion.div
      className="relative w-16 h-40 pointer-events-none"
      animate={{ rotate: isActive ? -18 : -10, y: isActive ? [0, 8, 0] : 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute top-2 left-2 w-12 h-3 rounded-full bg-slate-200/80 border border-white/40" />
      <div className="absolute top-4 left-8 w-2 h-24 rounded-full bg-slate-300/70 border border-white/40" />
      <div className="absolute bottom-2 left-[33px] w-1 h-8 rounded-full bg-cyan-200/80" />
      <div className="absolute bottom-0 left-[31px] w-2 h-2 rounded-full bg-cyan-200/90 blur-[0.5px]" />
    </motion.div>
  )
}

