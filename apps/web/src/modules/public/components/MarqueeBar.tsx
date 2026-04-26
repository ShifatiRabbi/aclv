import React from 'react';

const MarqueeBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] bg-primary-container/90 backdrop-blur-md h-8 flex items-center overflow-hidden border-b border-white/10">
      <div className="flex overflow-hidden whitespace-nowrap w-full">
        <div className="flex animate-marquee items-center">
          <span className="font-label-md text-xs uppercase tracking-widest text-on-primary-container mx-8">
            🚀 New Simulation Modules Added | 20% Off Premium Plans | Live Labs Now Available | MOLECULAR PRECISION SECURED |
          </span>
          <span className="font-label-md text-xs uppercase tracking-widest text-on-primary-container mx-8">
            🚀 New Simulation Modules Added | 20% Off Premium Plans | Live Labs Now Available | MOLECULAR PRECISION SECURED |
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarqueeBar;