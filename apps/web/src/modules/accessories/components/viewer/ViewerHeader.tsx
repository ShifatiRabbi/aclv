import React from "react";

interface Props {
  title: string;
  capacity: number;
}

const ViewerHeader: React.FC<Props> = ({ title, capacity }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-1">
        <p className="text-[10px] font-black text-primary-container uppercase tracking-[0.3em]">Engineering View</p>
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          {title}
          <span className="text-primary-container ml-2">{capacity}ml</span>
        </h2>
      </div>
    </div>
  );
};

export default ViewerHeader;
