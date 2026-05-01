import React from "react";
import type { Measurement } from "../../types";

interface Props {
  measurement: Measurement;
}

const MeasurementStats: React.FC<Props> = ({ measurement }) => {
  return (
    <div className="glass-panel mt-6 w-full p-6 rounded-3xl border border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/35 font-bold">Height</p>
          <p className="font-black text-white">{measurement.height_mm}mm</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/35 font-bold">Diameter</p>
          <p className="font-black text-white">{measurement.diameter_mm}mm</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/35 font-bold">Scale</p>
          <p className="font-black text-white">{measurement.graduation_step_ml}ml</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-white/35 font-bold">ISO</p>
          <p className="font-black text-white">3.3 DIN</p>
        </div>
      </div>
    </div>
  );
};

export default MeasurementStats;
