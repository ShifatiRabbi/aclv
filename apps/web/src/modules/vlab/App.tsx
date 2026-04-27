import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { api } from '../../shared/utils/api'
import { Home } from './pages/Home'
import { Selection } from './pages/Selection'
import { LabArea } from './components/Lab/LabArea'
import { ControlPanel } from './components/UI/ControlPanel'
import { LearningPanel, LabHeader } from './components/UI/LearningPanel'
import { Result } from './components/UI/Result'
import { ChemicalLibrary } from './components/Lab/ChemicalLibrary'
import { useLabStore } from './store/useLabStore'

type Page = 'home' | 'selection' | 'lab'

export default function VirtualLabApp() {
  const [page, setPage] = React.useState<Page>('home')
  const { currentExperiment, resetLab, showResult, setAllChemicals } = useLabStore()

  React.useEffect(() => {
    api
      .get('/chemicals')
      .then((res: { data?: { chemicals?: unknown[] } }) => setAllChemicals((res.data?.chemicals as any[]) ?? []))
      .catch((err: unknown) => console.error('Chemical fetch error', err))
  }, [setAllChemicals])

  const handleReset = () => resetLab()

  const handleHome = () => {
    resetLab()
    setPage('home')
  }

  return (
    <div className="h-screen w-screen bg-[#0A0A0C] text-[#E0E0E0] font-sans flex flex-col overflow-hidden select-none">
      <AnimatePresence mode="wait">
        {page === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1">
            <Home onStart={() => setPage('selection')} />
          </motion.div>
        )}

        {page === 'selection' && (
          <motion.div
            key="selection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1"
          >
            <Selection onBack={() => setPage('home')} onSelect={() => setPage('lab')} />
          </motion.div>
        )}

        {page === 'lab' && currentExperiment && (
          <motion.div
            key="lab"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col overflow-hidden"
          >
            <LabHeader />
            <main className="flex-1 flex overflow-hidden relative">
              <ChemicalLibrary />
              <div className="flex-1 flex flex-col relative overflow-hidden">
                <LearningPanel />
                <LabArea />
              </div>
              <ControlPanel />
            </main>
            {showResult && <Result onReset={handleReset} onHome={handleHome} />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

