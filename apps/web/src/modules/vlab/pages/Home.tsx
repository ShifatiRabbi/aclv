import React from 'react'
import { motion } from 'motion/react'
import { Beaker, Microscope, Activity, ChevronRight } from 'lucide-react'

interface HomeProps {
  onStart: () => void
}

export const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0C] flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-lab-accent/20 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: '110%',
              opacity: Math.random()
            }}
            animate={{
              y: '-10%',
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lab-accent/10 rounded-full border border-lab-accent/20 mb-6 font-bold">
          <Activity size={14} className="text-lab-accent" />
          <span className="text-[10px] text-lab-accent uppercase tracking-[0.2em]">Simulation Active</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 leading-none uppercase">
          Virtual
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lab-accent to-[#E0E0E0]">Laboratory</span>
        </h1>
        <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed font-serif italic">
          Experience real-world chemical reactions in a safe, technical, and high-fidelity virtual environment.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full relative z-10">
        <ExperimentCard
          title="Titration Analysis"
          desc="Master acid-base neutralization techniques with precise volume control and visual indicators."
          icon={<Beaker className="text-lab-accent" size={32} />}
          onClick={onStart}
        />
        <ExperimentCard
          title="Ion Detection"
          desc="Identify unknown samples through qualitative analysis, precipitate formation, and color changes."
          icon={<Microscope className="text-white/40" size={32} />}
          onClick={onStart}
        />
      </div>

      <footer className="absolute bottom-8 text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] font-mono">
        Precision Simulation Engine — v2
      </footer>
    </div>
  )
}

const ExperimentCard = ({
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
      className="group p-10 rounded-[32px] border border-white/5 bg-[#0F0F12] text-left transition-all relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-lab-accent/5" />
      <div className="relative z-10">
        <div className="mb-6 p-4 bg-black/40 rounded-2xl inline-block border border-white/10 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-between uppercase tracking-tight">
          {title}
          <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 text-lab-accent" />
        </h3>
        <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.button>
  )
}

