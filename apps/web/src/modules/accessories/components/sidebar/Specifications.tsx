import React from "react";
import InfoCard from "../ui/InfoCard";
import type { Equipment } from "../../types";

interface Props {
  equipment: Equipment;
}

const Specifications: React.FC<Props> = ({ equipment }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
      <InfoCard label="Material" value={equipment.material} />
      <InfoCard label="Laboratory Usage" value={equipment.lab_usage} />
      <InfoCard label="Description" value={equipment.description} />
    </div>
  );
};

export default Specifications;
