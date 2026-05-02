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
    <>

      {/* Top text part */}
      <div className="relative z-10 p-8 max-w-7xl mx-auto">
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
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-350 mx-auto px-4">
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
      </div>

      {/* Details Modal */}
      <ElementDetailsModal 
        element={element}
        reactions={reactions}
        onClose={() => setSelectedAtomicNumber(null)}
        loading={detailLoading}
      />
    </>
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
