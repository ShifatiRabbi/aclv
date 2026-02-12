import React from "react";
import type { Measurement } from "../../types";

interface Props {
  measurements: Measurement[];
  selectedCapacity: number;
  onSelect: (capacity: number) => void;
}

const CapacitySelector: React.FC<Props> = ({
  measurements,
  selectedCapacity,
  onSelect,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <label className="block text-sm font-bold mb-3">
        Capacity (ml)
      </label>
      <div className="grid grid-cols-3 gap-2">
        {measurements.map((m) => (
          <button
            key={m.capacity_ml}
            onClick={() => onSelect(m.capacity_ml)}
            className={`py-2 rounded-lg border ${
              selectedCapacity === m.capacity_ml
                ? "bg-indigo-600 text-white"
                : "bg-white"
            }`}
          >
            {m.capacity_ml} ml
          </button>
        ))}
      </div>
    </div>
  );
};

export default CapacitySelector;
