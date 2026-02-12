import React, { useState, useMemo } from 'react';
import { laboratoryEquipment } from './data';
import { GlasswareRenderer } from './components/GlasswareRenderer';
// import type { Equipment, Measurement } from './types'

const App: React.FC = () => {
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<string>(laboratoryEquipment[0].id);
  const [selectedCapacity, setSelectedCapacity] = useState<number>(laboratoryEquipment[0].measurements[0].capacity_ml);

  const selectedEquipment = useMemo(() => 
    laboratoryEquipment.find(e => e.id === selectedEquipmentId) || laboratoryEquipment[0],
    [selectedEquipmentId]
  );

  const selectedMeasurement = useMemo(() => 
    selectedEquipment.measurements.find(m => m.capacity_ml === selectedCapacity) || selectedEquipment.measurements[0],
    [selectedEquipment, selectedCapacity]
  );

  // Handle equipment change - reset capacity to first available for new item
  const handleEquipmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value;
    setSelectedEquipmentId(newId);
    const newEquipment = laboratoryEquipment.find(eq => eq.id === newId);
    if (newEquipment) {
      setSelectedCapacity(newEquipment.measurements[0].capacity_ml);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-800">Chemical Glasses</h1>
              <p className="text-xs text-slate-500 font-medium">Precision Scientific Visualization</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-semibold text-indigo-600">Simulator</a>
            <a href="#" className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">Safety Specs</a>
            <a href="#" className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">Catalog</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-slate-800 border-b pb-4 border-slate-100 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0l-.52 2.1c-.47.18-.91.41-1.32.67l-1.9-1.24c-1.35-.89-3.11.24-2.9 1.83l.29 2.14c-.3.39-.55.82-.73 1.28l-2.09.43c-1.55.32-2.01 2.3-.77 3.23l1.74 1.3c.02.46.09.91.21 1.34l-1.21 1.76c-.86 1.26.4 2.87 1.94 2.37l2.06-.66c.41.31.86.58 1.33.79l.26 2.18c.19 1.57 2.42 1.57 2.61 0l.26-2.18c.47-.21.92-.48 1.33-.79l2.06.66c1.54.5 2.8-1.11 1.94-2.37l-1.21-1.76c.12-.43.19-.88.21-1.34l1.74-1.3c1.24-.93.78-2.91-.77-3.23l-2.09-.43c-.18-.46-.43-.89-.73-1.28l.29-2.14c.21-1.59-1.55-2.72-2.9-1.83l-1.9 1.24c-.41-.26-.85-.49-1.32-.67l-.52-2.1zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Equipment Configuration
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-600 mb-2 uppercase tracking-wide">Select Equipment</label>
                <select 
                  value={selectedEquipmentId}
                  onChange={handleEquipmentChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-800 font-medium focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all cursor-pointer hover:bg-white"
                >
                  {laboratoryEquipment.map(eq => (
                    <option key={eq.id} value={eq.id}>{eq.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-600 mb-2 uppercase tracking-wide">Capacity (ml)</label>
                <div className="grid grid-cols-3 gap-2">
                  {selectedEquipment.measurements.map(m => (
                    <button
                      key={m.capacity_ml}
                      onClick={() => setSelectedCapacity(m.capacity_ml)}
                      className={`py-2 px-1 rounded-lg border text-sm font-bold transition-all ${
                        selectedCapacity === m.capacity_ml
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-200'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
                      }`}
                    >
                      {m.capacity_ml} ml
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Specifications
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                <p className="text-xs font-bold text-indigo-500 uppercase mb-1">Material</p>
                <p className="text-sm font-semibold text-slate-700">{selectedEquipment.material}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Laboratory Usage</p>
                <p className="text-sm font-medium text-slate-700">{selectedEquipment.lab_usage}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Description</p>
                <p className="text-sm text-slate-600 leading-relaxed italic">"{selectedEquipment.description}"</p>
              </div>
            </div>
          </section>
        </aside>

        {/* Viewer Main Area */}
        <section className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-slate-800 flex items-baseline gap-2">
                {selectedEquipment.title}
                <span className="text-indigo-600 text-lg font-bold">{selectedCapacity}ml</span>
              </h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </button>
                <button className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            <GlasswareRenderer 
              equipment={selectedEquipment} 
              measurement={selectedMeasurement} 
            />

            <div className="mt-8 w-full p-4 border-t border-slate-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Height</p>
                  <p className="text-lg font-bold text-slate-700">{selectedMeasurement.height_mm}mm</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Diameter</p>
                  <p className="text-lg font-bold text-slate-700">{selectedMeasurement.diameter_mm}mm</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Scale Interval</p>
                  <p className="text-lg font-bold text-slate-700">{selectedMeasurement.graduation_step_ml}ml</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">ISO Standard</p>
                  <p className="text-lg font-bold text-slate-700">3.3 DIN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Guide */}
          <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-xl shadow-indigo-200 flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674a1 1 0 00.922-.606l7-15A1 1 0 0021.337 0H2.663a1 1 0 00-.922 1.394l7 15a1 1 0 00.922.606zM2 22h20" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Scientific Reading Tip</h4>
              <p className="text-indigo-100 text-sm">Always read the liquid level at the <strong>meniscus</strong> (the curve of the liquid) at eye level for the most accurate measurement. In borosilicate glassware, the lower part of the curve is used for aqueous solutions.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-8 px-6 text-center text-slate-500">
        <p className="text-sm font-medium">&copy; 2026 Advanced Chemical Lab Visualization. All technical data conforms to ISO 3819 / DIN 12331.</p>
      </footer>
    </div>
  );
};

export default App;