import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Activity, Thermometer, Zap, Globe, Beaker, ShieldAlert } from 'lucide-react';
import type { Element, Reaction } from '../types';
import { ElementInfoSection } from './ElementInfoSection';
import { ReactionList } from './ReactionList';

interface ElementDetailsModalProps {
  element: Element | null;
  reactions: Reaction[];
  onClose: () => void;
  loading: boolean;
}

export function ElementDetailsModal({ element, reactions, onClose, loading }: ElementDetailsModalProps) {
  if (!element && !loading) return null;

  return (
    <AnimatePresence>
      {element && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            layoutId={`element-${element.atomic_number}`}
            className="relative w-full max-w-5xl max-h-[90vh] bg-neutral-900 border border-orange-500/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,122,24,0.15)] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-orange-500/10 to-transparent">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-white bg-black/40 p-4 rounded-lg border border-orange-500 shadow-[0_0_20px_rgba(255,122,24,0.3)]">
                  {element.symbol}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">{element.name}</h2>
                  <p className="text-orange-400 font-mono text-sm uppercase tracking-widest">
                    Atomic Number: {element.atomic_number} • {element.category}
                  </p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
              {/* Top Section: Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <QuickStat label="Atomic Mass" value={`${element.atomic_mass.toFixed(4)} u`} icon={<Activity size={16} />} />
                <QuickStat label="Phase (STP)" value={element.phase_at_stp} icon={<Globe size={16} />} />
                <QuickStat label="Melting Point" value={element.thermodynamics.melting_point_k ? `${element.thermodynamics.melting_point_k} K` : 'N/A'} icon={<Thermometer size={16} />} />
                <QuickStat label="Electronegativity" value={element.electrical.electronegativity_pauling?.toString() || 'N/A'} icon={<Zap size={16} />} />
              </div>

              {/* Description */}
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <Beaker size={18} className="text-orange-400" />
                  Detailed Overview
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {element.detailed_description}
                </p>
              </div>

              {/* Grid content */}
              <div className="grid md:grid-cols-2 gap-8">
                <ElementInfoSection title="Physical Properties" data={[
                  { label: "Latin Name", value: element.latin_name },
                  { label: "Group / Period", value: `${element.group || 'N/A'} / ${element.period}` },
                  { label: "Block", value: element.block.toUpperCase() },
                  { label: "Density", value: element.density_g_cm3 ? `${element.density_g_cm3} g/cm³` : 'N/A' },
                  { label: "Stability", value: element.stability },
                  { label: "Standard State Color", value: element.standard_state_color },
                ]} />
                
                <ElementInfoSection title="Atomic & Chemical" data={[
                  { label: "Config", value: element.electronic_configuration.full },
                  { label: "Valency", value: element.valency.join(", ") },
                  { label: "Oxidation States", value: element.oxidation_states.join(", ") },
                  { label: "Radii (Atomic)", value: element.radii.atomic ? `${element.radii.atomic} pm` : 'N/A' },
                  { label: "Ionization", value: element.electrical.ionization_energies_kj_mol[0] ? `${element.electrical.ionization_energies_kj_mol[0]} kJ/mol` : 'N/A' },
                ]} />
              </div>

              {/* Abundance Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <AbundanceStat label="Universe" value={element.abundance.universe_ppm ? `${element.abundance.universe_ppm} ppm` : 'Trace'} />
                 <AbundanceStat label="Earth Crust" value={element.abundance.earth_crust_ppm ? `${element.abundance.earth_crust_ppm} ppm` : 'Trace'} />
                 <AbundanceStat label="Ocean" value={element.abundance.ocean_ppm ? `${element.abundance.ocean_ppm} ppm` : 'Trace'} />
                 <AbundanceStat label="Human Body" value={element.abundance.human_body_ppm ? `${element.abundance.human_body_ppm} ppm` : 'Trace'} />
              </div>

              {/* History & Discovery */}
              <div className="bg-orange-500/5 p-6 rounded-xl border border-orange-500/20">
                 <h3 className="text-lg font-semibold text-white mb-4">Discovery History</h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="text-[10px] uppercase text-orange-400 font-bold block mb-1">Discoverer</label>
                      <p className="text-white">{element.discovery.discoverer}</p>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-orange-400 font-bold block mb-1">Year</label>
                      <p className="text-white">{element.discovery.year}</p>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-orange-400 font-bold block mb-1">Etymology</label>
                      <p className="text-white text-xs">{element.discovery.etymology}</p>
                    </div>
                 </div>
              </div>

              {/* Hazards & Safety */}
              <div className="bg-red-500/5 p-6 rounded-xl border border-red-500/20">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <ShieldAlert size={18} className="text-red-400" />
                  Safety & Hazards
                </h3>
                <div className="flex gap-4 items-center">
                  <div>
                    <label className="text-[10px] uppercase text-red-400 font-bold block mb-1">Toxicity</label>
                    <p className="text-white capitalize">{element.toxicity_level}</p>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase text-red-400 font-bold block mb-1">GHS Codes</label>
                    <div className="flex gap-2">
                      {element.hazard_codes.map(code => (
                        <span key={code} className="px-2 py-1 bg-red-500/20 text-red-400 text-[10px] font-mono border border-red-500/30 rounded">
                          {code}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Reactions Section */}
              <ReactionList reactions={reactions} />
            </div>

            {/* Footer */}
            <div className="p-4 bg-black/60 border-t border-white/10 flex justify-end">
              <button 
                className="flex items-center gap-2 px-6 py-2 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)]"
                onClick={() => window.open(`https://en.wikipedia.org/wiki/${element.name}`, '_blank')}
              >
                External Resource <ExternalLink size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function QuickStat({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-black/40 border border-white/5 p-4 rounded-xl flex items-center gap-3">
      <div className="text-orange-400">{icon}</div>
      <div>
        <div className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider font-mono">{label}</div>
        <div className="text-white font-mono">{value}</div>
      </div>
    </div>
  );
}

function AbundanceStat({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-white/5 border border-white/5 p-3 rounded-lg text-center">
      <div className="text-[9px] uppercase text-gray-500 font-bold mb-1">{label}</div>
      <div className="text-white text-xs font-mono">{value}</div>
    </div>
  );
}
