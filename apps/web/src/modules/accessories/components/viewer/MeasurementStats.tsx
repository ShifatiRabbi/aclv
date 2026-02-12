import React from "react";
import type { Measurement } from "../../types";

interface Props {
  measurement: Measurement;
}

const MeasurementStats: React.FC<Props> = ({ measurement }) => {
  return (
    <div className="mt-8 w-full p-4 border-t">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-xs uppercase">Height</p>
          <p className="font-bold">{measurement.height_mm}mm</p>
        </div>
        <div>
          <p className="text-xs uppercase">Diameter</p>
          <p className="font-bold">{measurement.diameter_mm}mm</p>
        </div>
        <div>
          <p className="text-xs uppercase">Scale</p>
          <p className="font-bold">
            {measurement.graduation_step_ml}ml
          </p>
        </div>
        <div>
          <p className="text-xs uppercase">ISO</p>
          <p className="font-bold">3.3 DIN</p>
        </div>
      </div>
    </div>
  );
};

export default MeasurementStats;
