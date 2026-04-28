import { motion } from 'motion/react'
import { Activity } from 'lucide-react'
import { ExperimentGrid } from '../components/home/ExperimentGrid'

export const Home = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0C] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* Background animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-lab-accent/20 rounded-full"
            initial={{ x: Math.random() * 100 + '%', y: '110%' }}
            animate={{ y: '-10%' }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lab-accent/10 rounded-full border border-lab-accent/20 mb-6">
          <Activity size={14} className="text-lab-accent" />
          <span className="text-[10px] text-lab-accent uppercase tracking-[0.2em]">
            Simulation Active
          </span>
        </div>

        <h1 className="text-6xl font-black text-white uppercase">
          Reaxorium
        </h1>
      </motion.div>

      {/* ✅ Clean grid */}
      <div className="relative z-10">
        <ExperimentGrid onStart={onStart} />
      </div>
    </div>
  )
}