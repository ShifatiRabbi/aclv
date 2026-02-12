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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />

      <MainLayout
        sidebar={
          <>
            <EquipmentSelector equipmentList={laboratoryEquipment} selectedId={selectedEquipment.id} 
              onChange={handleEquipmentChange} />

            <CapacitySelector measurements={selectedEquipment.measurements} selectedCapacity={selectedCapacity}
              onSelect={setSelectedCapacity} />

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

      <Footer />
    </div>
  );
};

export default App;