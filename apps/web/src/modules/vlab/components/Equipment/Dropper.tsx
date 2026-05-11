import React from 'react'
import { motion } from 'motion/react'

interface DropperProps {
  chemicalColor: string
  dropTrigger: number
}

export const Dropper: React.FC<DropperProps> = ({ chemicalColor, dropTrigger }) => {
  return (
    <div className="relative w-8 h-40 pointer-events-none">
      <div className="w-6 h-8 bg-red-800 rounded-t-full mx-auto" />
      <div className="w-2 h-20 bg-white/20 border-x border-white/30 mx-auto relative overflow-hidden">
        <div className="absolute bottom-0 w-full" style={{ height: '40%', backgroundColor: chemicalColor }} />
      </div>
      <div className="w-1 h-4 bg-white/20 border-x border-white/30 mx-auto rounded-b-full" />

      {/* Keyed droplet guarantees a fresh fall animation for every click. */}
      {dropTrigger > 0 && (
        <motion.div
          key={dropTrigger}
          initial={{ y: 0, opacity: 0, scale: 0.8 }}
          animate={{ y: 170, opacity: [0, 0.9, 0.75, 0], scale: [0.8, 1, 0.9, 0.7] }}
          transition={{ duration: 0.55, ease: 'easeIn' }}
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2 h-3 rounded-full"
          style={{ backgroundColor: chemicalColor }}
        />
      )}
    </div>
  )
}

