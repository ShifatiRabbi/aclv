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
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <label className="block text-sm font-bold mb-2">
        Select Equipment
      </label>
      <select
        value={selectedId}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-lg px-3 py-2"
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
