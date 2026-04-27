import React from 'react'
import { motion } from 'motion/react'

interface TestTubeProps {
  liquidLevel: number
  liquidColor: string
  precipitateProgress: number
}

export const TestTube: React.FC<TestTubeProps> = ({ liquidLevel, liquidColor, precipitateProgress }) => {
  const fillHeight = (liquidLevel / 100) * 120

  return (
    <div className="relative w-12 h-48 flex items-center justify-center">
      <svg viewBox="0 0 40 130" className="w-full h-full drop-shadow-lg">
        <path
          d="M10 10 L10 110 A10 10 0 0 0 30 110 L30 10"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="2"
        />

        <defs>
          <clipPath id="tubeClip">
            <path d="M10 10 L10 110 A10 10 0 0 0 30 110 L30 10" />
          </clipPath>
        </defs>

        <g clipPath="url(#tubeClip)">
          <motion.rect
            initial={false}
            animate={{
              height: fillHeight,
              y: 120 - fillHeight,
              fill: liquidColor
            }}
            transition={{ type: 'spring', stiffness: 50 }}
            x="0"
            width="40"
          />

          {precipitateProgress > 0 && (
            <motion.rect
              initial={{ height: 0 }}
              animate={{ height: precipitateProgress * 20 }}
              x="10"
              y={120 - precipitateProgress * 20}
              width="20"
              fill="rgba(255, 255, 255, 0.9)"
              className="blur-[1px]"
            />
          )}

          {precipitateProgress > 0 &&
            precipitateProgress < 0.5 &&
            Array.from({ length: 8 }).map((_, i) => (
              <motion.circle
                key={i}
                initial={{ cy: 40, opacity: 0 }}
                animate={{
                  cy: [40, 110],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + i * 0.2,
                  delay: i * 0.1
                }}
                cx={15 + Math.random() * 10}
                r="1.5"
                fill="white"
              />
            ))}
        </g>
      </svg>
    </div>
  )
}

