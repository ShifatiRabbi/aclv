import React from 'react'
import { motion } from 'motion/react'

interface BeakerProps {
  liquidColor: string
  isActive: boolean
}

export const Beaker: React.FC<BeakerProps> = ({ liquidColor, isActive }) => {
  return (
    <motion.div
      className="relative w-20 h-28 pointer-events-none"
      animate={{ rotate: isActive ? -14 : 0, x: isActive ? 4 : 0 }}
      transition={{ type: 'spring', stiffness: 140, damping: 14 }}
    >
      <div className="absolute inset-0 border-2 border-white/50 rounded-b-xl rounded-t-sm bg-white/[0.02] overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          animate={{ height: isActive ? '40%' : '56%', backgroundColor: liquidColor }}
          transition={{ duration: 0.35 }}
        />
      </div>
      <div className="absolute -right-2 top-5 h-10 w-3 border border-white/40 rounded-r-md" />
    </motion.div>
  )
}

