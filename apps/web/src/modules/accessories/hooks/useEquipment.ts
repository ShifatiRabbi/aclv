import { useState, useMemo } from "react";
import { laboratoryEquipment } from "../data";

export const useEquipment = () => {
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<string>(
    laboratoryEquipment[0].id
  );

  const [selectedCapacity, setSelectedCapacity] = useState<number>(
    laboratoryEquipment[0].measurements[0].capacity_ml
  );

  const selectedEquipment = useMemo(
    () =>
      laboratoryEquipment.find((e) => e.id === selectedEquipmentId) ||
      laboratoryEquipment[0],
    [selectedEquipmentId]
  );

  const selectedMeasurement = useMemo(
    () =>
      selectedEquipment.measurements.find(
        (m) => m.capacity_ml === selectedCapacity
      ) || selectedEquipment.measurements[0],
    [selectedEquipment, selectedCapacity]
  );

  const handleEquipmentChange = (id: string) => {
    setSelectedEquipmentId(id);
    const newEquipment = laboratoryEquipment.find((eq) => eq.id === id);
    if (newEquipment) {
      setSelectedCapacity(newEquipment.measurements[0].capacity_ml);
    }
  };

  return {
    laboratoryEquipment,
    selectedEquipment,
    selectedMeasurement,
    selectedCapacity,
    setSelectedCapacity,
    handleEquipmentChange,
  };
};
