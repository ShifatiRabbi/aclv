import React from "react";
import type { Equipment } from "../../types";

interface Props {
  equipmentList: Equipment[];
  selectedId: string;
  onChange: (id: string) => void;
}

const EquipmentSelector: React.FC<Props> = ({
  equipmentList,
  selectedId,
  onChange,
}) => {
  return (
    <div className="glass-panel p-6 rounded-3xl border border-white/10 neumorphic-outset">
      <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">
        Select Equipment
      </label>
      <select
        value={selectedId}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 focus:outline-none focus:ring-1 focus:ring-primary-container/60"
      >
        {equipmentList.map((eq) => (
          <option key={eq.id} value={eq.id}>
            {eq.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EquipmentSelector;
