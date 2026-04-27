import React from 'react'
import { motion } from 'motion/react'

interface FlaskProps {
  liquidLevel: number
  liquidColor: string
  isStirring?: boolean
}

export const Flask: React.FC<FlaskProps> = ({ liquidLevel, liquidColor, isStirring }) => {
  const fillHeight = (liquidLevel / 100) * 120

  return (
    <div className="relative w-48 h-64 flex items-center justify-center">
      <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-xl">
        <path d="M35 10 L65 10 L65 40 L90 110 L10 110 L35 40 Z" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />

        <path d="M40 15 L45 15 L45 40 L20 105 L15 100 L40 40 Z" fill="rgba(255,255,255,0.1)" />

        <defs>
          <clipPath id="flaskClip">
            <path d="M35 10 L65 10 L65 40 L90 110 L10 110 L35 40 Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#flaskClip)">
          <motion.path
            initial={false}
            animate={{
              d: `M 0 ${110 - fillHeight} 
                  Q 50 ${110 - fillHeight - 5} 100 ${110 - fillHeight} 
                  L 100 110 L 0 110 Z`,
              fill: liquidColor
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 60 }}
            className={isStirring ? 'animate-pulse' : ''}
          />

          {isStirring && (
            <g>
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.circle
                  key={i}
                  animate={{
                    x: [40 + i * 4, 60 - i * 4, 40 + i * 4],
                    y: [100, 80, 100],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: i * 0.2
                  }}
                  r="1.5"
                  fill="rgba(255,255,255,0.4)"
                />
              ))}
            </g>
          )}
        </g>

        <line x1="42" y1="50" x2="50" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        <line x1="45" y1="70" x2="55" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
        <line x1="50" y1="90" x2="60" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      </svg>
      <div className="absolute bottom-4 text-[10px] font-mono text-white/40">250ml</div>
    </div>
  )
}

