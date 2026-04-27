import React from 'react'
import { motion } from 'motion/react'

interface DropperProps {
  chemicalColor: string
  isActive: boolean
}

export const Dropper: React.FC<DropperProps> = ({ chemicalColor, isActive }) => {
  return (
    <motion.div
      className="relative w-8 h-32 pointer-events-none"
      animate={{
        y: isActive ? [0, 10, 0] : 0
      }}
      transition={{ repeat: isActive ? Infinity : 0, duration: 2 }}
    >
      <div className="w-6 h-8 bg-red-800 rounded-t-full mx-auto" />
      <div className="w-2 h-20 bg-white/20 border-x border-white/30 mx-auto relative overflow-hidden">
        <div className="absolute bottom-0 w-full" style={{ height: '40%', backgroundColor: chemicalColor }} />
      </div>
      <div className="w-1 h-4 bg-white/20 border-x border-white/30 mx-auto rounded-b-full" />
    </motion.div>
  )
}

