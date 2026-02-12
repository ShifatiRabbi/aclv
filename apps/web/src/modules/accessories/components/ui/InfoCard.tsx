import React from "react";

interface Props {
  label: string;
  value: string;
}

const InfoCard: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="p-3 bg-slate-50 rounded-lg border">
      <p className="text-xs font-bold uppercase mb-1">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
};

export default InfoCard;
