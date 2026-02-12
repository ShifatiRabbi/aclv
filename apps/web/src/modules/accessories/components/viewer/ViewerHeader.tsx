import React from "react";

interface Props {
  title: string;
  capacity: number;
}

const ViewerHeader: React.FC<Props> = ({ title, capacity }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">
        {title}
        <span className="text-indigo-600 ml-2">{capacity}ml</span>
      </h2>
    </div>
  );
};

export default ViewerHeader;
