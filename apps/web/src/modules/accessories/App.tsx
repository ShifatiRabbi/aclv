import React from "react";
import { useEquipment } from "./hooks/useEquipment";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainLayout from "./components/layout/MainLayout";

import EquipmentSelector from "./components/sidebar/EquipmentSelector";
import CapacitySelector from "./components/sidebar/CapacitySelector";
import Specifications from "./components/sidebar/Specifications";

import ViewerHeader from "./components/viewer/ViewerHeader";
import MeasurementStats from "./components/viewer/MeasurementStats";

import { GlasswareRenderer } from "./components/GlasswareRenderer";

const App: React.FC = () => {
  const {
    laboratoryEquipment,
    selectedEquipment,
    selectedMeasurement,
    selectedCapacity,
    setSelectedCapacity,
    handleEquipmentChange,
  } = useEquipment();

  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans overflow-x-hidden">
      <Header />

      <main className="pt-28 pb-28 particle-bg">
        <section className="relative px-6 md:px-12 pt-10 pb-8 max-w-7xl mx-auto">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-40 -right-20 w-80 h-80 bg-tertiary-container/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest/60 rounded-full w-fit mb-2 border border-white/5">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-primary-container uppercase">System Ready</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-none">
                Virtual <span className="text-primary-container">Glassware</span> Lab
              </h1>
              <p className="text-on-surface-variant/70 max-w-xl">
                High-fidelity laboratory equipment visualization with engineering-grade dimensions and capacity selection.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#accessories-sim"
                  className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold uppercase tracking-wider neumorphic-outset hover:brightness-110 transition-all"
                >
                  Explore Equipment
                </a>
                <a
                  href="/chemicals"
                  className="glass-panel px-8 py-4 rounded-full font-bold uppercase tracking-wider border border-white/20 hover:bg-white/10 transition-all"
                >
                  Start Simulation
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-primary-container/10 blur-[100px] rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="relative glass-panel rounded-full p-10 border border-primary-container/20 shadow-[0_0_50px_rgba(255,122,24,0.12)] aspect-square flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-primary-container text-sm font-black uppercase tracking-[0.3em]">Precision Viewer</div>
                  <div className="text-white/80 text-xs tracking-widest uppercase">Scale • Bore • Height • Graduations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-panel p-6 rounded-2xl text-center">
              <div className="text-3xl font-black text-primary-container">500+</div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Equipment Profiles</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl text-center">
              <div className="text-3xl font-black text-primary-container">99.9%</div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Dim Accuracy</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl text-center hidden md:block">
              <div className="text-3xl font-black text-primary-container">DIN</div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Spec Targets</div>
            </div>
            <div className="glass-panel p-6 rounded-2xl text-center hidden md:block">
              <div className="text-3xl font-black text-primary-container">24/7</div>
              <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Lab Access</div>
            </div>
          </div>
        </section>

        <div id="accessories-sim">
          <MainLayout
            sidebar={
              <>
                <EquipmentSelector
                  equipmentList={laboratoryEquipment}
                  selectedId={selectedEquipment.id}
                  onChange={handleEquipmentChange}
                />

                <CapacitySelector
                  measurements={selectedEquipment.measurements}
                  selectedCapacity={selectedCapacity}
                  onSelect={setSelectedCapacity}
                />

                <Specifications equipment={selectedEquipment} />
              </>
            }
            viewer={
              <>
                <ViewerHeader title={selectedEquipment.title} capacity={selectedCapacity} />
                <GlasswareRenderer equipment={selectedEquipment} measurement={selectedMeasurement} />
                <MeasurementStats measurement={selectedMeasurement} />
              </>
            }
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;