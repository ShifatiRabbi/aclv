import React from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface BuretteProps {
  isTitrating: boolean
  value: number
  onValueChange: (v: number) => void
  hasError?: boolean
}

export const Burette: React.FC<BuretteProps> = ({ isTitrating, value, onValueChange, hasError }) => {
  void onValueChange

  return (
    <div className="relative w-12 h-96 flex flex-col items-center">
      {hasError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"
        />
      )}

      <div
        className={`relative w-4 h-full border-x-2 bg-white/5 overflow-hidden rounded-t-full transition-colors ${
          hasError ? 'border-red-500/50 bg-red-500/5' : 'border-white/30'
        }`}
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="absolute w-full border-t border-white/20" style={{ bottom: `${(i / 50) * 100}%` }}>
            {i % 10 === 0 && (
              <span className="absolute left-6 -top-2 text-[8px] text-white/40 font-mono">{50 - i}</span>
            )}
          </div>
        ))}

        <motion.div
          className="absolute bottom-0 w-full bg-blue-400/30"
          animate={{ height: `${((50 - value) / 50) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="relative w-8 h-8 flex items-center justify-center">
        <motion.div className="w-6 h-2 bg-gray-400 rounded-full cursor-pointer" animate={{ rotate: isTitrating ? 90 : 0 }} />
        <div className="absolute top-full w-2 h-8 bg-white/20 rounded-b-full border-x-2 border-white/30" />
      </div>

      <AnimatePresence>
        {isTitrating && (
          <motion.div
            key="droplet"
            initial={{ y: 0, opacity: 1, scale: 1 }}
            animate={{ y: 200, opacity: 0, scale: 0.5 }}
            transition={{ repeat: Infinity, duration: 0.6, ease: 'linear' }}
            className="absolute bottom-0 w-1.5 h-3 bg-blue-300/60 rounded-full"
            style={{ transform: 'translateY(40px)' }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

