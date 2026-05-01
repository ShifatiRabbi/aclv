import React from 'react';

const stats = [
  { value: '500+', label: 'Virtual Labs' },
  { value: '99.9%', label: 'Accuracy' },
  { value: '120k+', label: 'Researchers' },
  { value: '24/7', label: 'AI Assistance' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center">
            <span className="text-3xl text-primary-container" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
              {stat.value}
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-widest mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;