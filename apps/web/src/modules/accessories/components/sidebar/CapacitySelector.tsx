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
    <div className="glass-panel p-6 rounded-3xl border border-white/10 neumorphic-outset">
      <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-4">
        Capacity (ml)
      </label>
      <div className="grid grid-cols-3 gap-2">
        {measurements.map((m) => (
          <button
            key={m.capacity_ml}
            onClick={() => onSelect(m.capacity_ml)}
            className={`py-2 rounded-xl border text-xs font-bold tracking-wider transition-all ${
              selectedCapacity === m.capacity_ml
                ? "bg-primary-container text-on-primary-container border-primary-container/40"
                : "bg-white/[0.03] text-white/70 border-white/10 hover:border-primary-container/30 hover:text-white"
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
