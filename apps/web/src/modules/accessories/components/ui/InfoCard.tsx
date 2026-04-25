import React from "react";

interface Props {
  label: string;
  value: string;
}

const InfoCard: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="glass-panel p-4 rounded-2xl border border-white/10">
      <p className="text-[10px] font-black uppercase tracking-widest mb-1 text-white/40">{label}</p>
      <p className="text-sm text-white/80 leading-relaxed">{value}</p>
    </div>
  );
};

export default InfoCard;
