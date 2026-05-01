
import React, { useState, useMemo, useEffect } from 'react';
import type { Chemical } from '../types';
import ChemicalCard from '../components/ChemicalCard';
import Beaker from '../components/Beaker';
import CalculationPanel from '../components/CalculationPanel';
import ControlPanel from '../components/ControlPanel';
import { getChemicals } from '../../../services/chemicals.service';

const Lab: React.FC = () => {
  const [chemicals, setChemicals] = useState<Chemical[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [activeChemical, setActiveChemical] = useState<Chemical | null>(null);
  const [volume, setVolume] = useState(250);
  const [mass, setMass] = useState(15);
  const [isLiquidMode, setIsLiquidMode] = useState(false);

  useEffect(() => {
    let mounted = true
    setIsLoading(true)
    setLoadError(null)
    getChemicals()
      .then((list) => {
        if (!mounted) return
        setChemicals(list)
        setActiveChemical(list[0] ?? null)
        if (list.length === 0) {
          setLoadError('No chemicals found in database. Please run seed script.')
        }
      })
      .catch((err) => {
        if (!mounted) return
        console.error('Failed to load chemicals', err?.response?.data ?? err)
        setLoadError('Failed to load chemicals from API (/api/chemicals).')
        setChemicals([])
        setActiveChemical(null)
      })
      .finally(() => {
        if (!mounted) return
        setIsLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  // Auto-disable liquid mode if not allowed for new chemical
  useEffect(() => {
    if (!activeChemical?.allowsLiquidView) {
      setIsLiquidMode(false);
    }
  }, [activeChemical]);

  const molarity = useMemo(() => {
    if (!activeChemical) return 0
    if (!isLiquidMode && activeChemical.state !== 'liquid') return 0;
    return (mass * 1000) / (activeChemical.molecularWeight * volume);
  }, [mass, volume, activeChemical, isLiquidMode]);

  return (
    <div className="w-full bg-[#050505] px-4 pb-12 text-gray-100 md:px-8">
      <section className="mx-auto max-w-7xl pt-8">
        <div className="mb-10 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">Chemical Repository</span>
          <h1 className="text-5xl font-black uppercase tracking-tight text-white md:text-6xl">
            Chemicals<span className="text-orange-500">.</span>
          </h1>
          <p className="max-w-2xl text-sm text-gray-400">
            Unified experiment-grade chemical catalog with the same visual system used by the Elements module.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4 xl:col-span-3  overflow-y-auto h-screen custom-scrollbar">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-400">Chemical Library</h2>

          {isLoading && (
                <div className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              Loading chemical database…
            </div>
          )}
          {!isLoading && loadError && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs font-bold uppercase tracking-widest text-red-300">
              {loadError}
            </div>
          )}
              <div className="grid grid-cols-1 gap-2 md:grid-cols-1 xl:grid-cols-2">
            {chemicals.map(chem => (
              <ChemicalCard 
                key={chem.id}
                chemical={chem}
                isActive={activeChemical?.id === chem.id}
                onClick={(c) => setActiveChemical(c)}
              />
            ))}
                {!isLoading && chemicals.length === 0 && !loadError && (
                  <p className="p-4 text-xs uppercase tracking-wider text-gray-400">No records available.</p>
                )}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 xl:col-span-9">
            {!activeChemical ? (
              <div className="rounded-2xl border border-white/10 bg-black/40 p-8 text-center text-slate-300 backdrop-blur-md">
                <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-400">No chemical loaded</div>
                <p className="text-sm">Ensure backend is running and data is seeded correctly.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 xl:grid-cols-12">
                <div className="xl:col-span-8">
                  <div className="mb-6 rounded-2xl border border-white/10 bg-black/40 p-6 text-center backdrop-blur-md">
                    <h2 className="text-4xl font-black tracking-tight text-white">{activeChemical.name}</h2>
                    <div className="mt-3 flex justify-center gap-3 text-xs font-bold">
                      <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 font-mono text-orange-300">
                        {activeChemical.formula}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 uppercase text-gray-300">
                        {isLiquidMode ? 'solution' : activeChemical.state}
                      </span>
                    </div>
                  </div>

                  <div className="mb-8 rounded-[2rem] border border-white/10 bg-black/30 p-8 backdrop-blur-md">
                    <Beaker 
                      volume={volume}
                      mass={mass}
                      chemical={activeChemical}
                      isLiquidMode={isLiquidMode}
                      molarity={molarity}
                    />
                  </div>

                  <ControlPanel 
                    chemical={activeChemical}
                    volume={volume}
                    mass={mass}
                    isLiquidMode={isLiquidMode}
                    onVolumeChange={setVolume}
                    onMassChange={setMass}
                    onToggleLiquidMode={setIsLiquidMode}
                  />
                </div>

                <div className="space-y-6 xl:col-span-4">
                  <CalculationPanel 
                    chemical={activeChemical}
                    volume={volume}
                    mass={mass}
                    molarity={molarity}
                    isLiquidMode={isLiquidMode}
                  />

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
                    <h3 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-orange-400">Scientific Profile</h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {activeChemical.description ?? 'No description available.'}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                      <div>
                        <p className="mb-1 text-[10px] font-bold uppercase text-gray-500">Molar Mass</p>
                        <p className="text-sm font-bold text-white">{activeChemical.molecularWeight.toFixed(2)} g/mol</p>
                      </div>
                      <div>
                        <p className="mb-1 text-[10px] font-bold uppercase text-gray-500">Density</p>
                        <p className="text-sm font-bold text-white">{activeChemical.density ? `${activeChemical.density} g/cm3` : 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lab;
