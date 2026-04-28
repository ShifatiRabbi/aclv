/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useElements } from '../hooks/useElements';
import { useElementDetails } from '../hooks/useElementDetails';
import { PeriodicGrid } from '../components/PeriodicGrid';
import { ElementDetailsModal } from '../components/ElementDetailsModal';
import { motion } from 'motion/react';
import { Search, Info, LayoutGrid } from 'lucide-react';

export default function ElementsPage() {
  const { elements, loading: listLoading, error: listError } = useElements();
  const [selectedAtomicNumber, setSelectedAtomicNumber] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { element, reactions, loading: detailLoading } = useElementDetails(selectedAtomicNumber);

  const filteredElements = elements.filter(e => 
    e.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    e.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.atomic_number.toString() === searchQuery
  );

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-orange-500/30">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-8 pt-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-0.5 w-12 bg-orange-500" />
              <span className="text-orange-500 font-mono tracking-widest text-xs uppercase font-bold">Scientific Database v1.0.4</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
              Elements<span className="text-orange-500">.</span>
            </h1>
            <p className="mt-4 text-gray-400 max-w-md font-medium">
              Interactive high-precision data repository for the periodic system.
              Select an element to initiate deep scan.
            </p>
          </div>

          <div className="flex flex-col gap-4">
             <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search atomic number, name or symbol..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-black/40 border border-white/10 rounded-full pl-12 pr-6 py-4 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-mono text-sm placeholder:text-gray-600"
                />
             </div>
             <div className="flex gap-4">
                <TabButton active icon={<LayoutGrid size={14}/>}>Table View</TabButton>
                <TabButton icon={<Info size={14}/>}>Guidelines</TabButton>
             </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-4">
        {listLoading ? (
          <div className="flex items-center justify-center h-64">
             <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : listError ? (
          <div className="p-8 text-center bg-red-500/10 border border-red-500/20 rounded-xl">
             <p className="text-red-400 font-mono">CRITICAL ERROR: {listError}</p>
          </div>
        ) : (
          <PeriodicGrid 
            elements={filteredElements} 
            onElementClick={(id) => setSelectedAtomicNumber(id)} 
          />
        )}
      </main>

      {/* Bottom Info Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 p-4 bg-black/60 backdrop-blur-md border-t border-white/5 flex justify-between items-center px-8">
        <div className="flex gap-8">
           <FooterStat label="DB STATUS" value="SYNCHRONIZED" color="text-green-500" />
           <FooterStat label="ELEMENTS" value={elements.length.toString()} color="text-orange-500" />
        </div>
        <div className="hidden md:flex gap-4 text-[10px] text-gray-500 font-mono">
           <span>LATENCY: 12ms</span>
           <span>ENCRYPTION: AES-256</span>
           <span>USER: GUEST_04</span>
        </div>
      </footer>

      {/* Details Modal */}
      <ElementDetailsModal 
        element={element}
        reactions={reactions}
        onClose={() => setSelectedAtomicNumber(null)}
        loading={detailLoading}
      />
    </div>
  );
}

function TabButton({ children, active, icon }: { children: React.ReactNode, active?: boolean, icon: React.ReactNode }) {
  return (
    <button className={`
      flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all
      ${active ? 'bg-orange-500 text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}
    `}>
      {icon}
      {children}
    </button>
  );
}

function FooterStat({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="flex items-center gap-2">
       <span className="text-[10px] font-mono text-gray-600 font-bold uppercase">{label}</span>
       <span className={`text-[11px] font-mono font-bold ${color}`}>{value}</span>
    </div>
  );
}
