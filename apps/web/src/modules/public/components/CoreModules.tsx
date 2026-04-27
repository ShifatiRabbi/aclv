import React from 'react';
import { Link } from 'react-router-dom';

const modules = [
  {
    icon: 'colorize',
    title: 'Titration Analysis',
    description: 'Automated volumetric analysis with high-precision droplet control and real-time pH tracking.',
    progress: 'w-2/3',
    link: '/vlab',
  },
  {
    icon: 'search',
    title: 'Ion Detection',
    description: 'Advanced analytical methods for qualitative and quantitative detection of cationic and anionic species.',
    progress: 'w-1/2',
    link: '/vlab',
  },
  {
    icon: 'bolt',
    title: 'Reaction Kinetics',
    description: 'Dynamic thermodynamics modeling of exothermic and endothermic chemical processes under varying conditions.',
    progress: 'w-full',
    link: '/vlab',
  },
];

const CoreModules: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl text-white uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, letterSpacing: '-0.01em' }}>
          Core <span className="text-primary-container">Modules</span>
        </h2>
        <span className="text-xs text-primary-container bg-primary-container/10 px-3 py-1 rounded-full uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
          Active
        </span>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {modules.map((module) => (
          <Link
            key={module.title}
            to={module.link}
            className="glass-panel group p-8 rounded-3xl border border-white/5 neumorphic-outset hover:border-primary-container/30 transition-all hover:-translate-y-2 duration-300"
          >
            <div className="h-14 w-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-primary-container group-hover:glow-orange transition-all">
              <span className="material-symbols-outlined text-3xl">{module.icon}</span>
            </div>
            <h3 className="text-xl text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
              {module.title}
            </h3>
            <p className="text-slate-500 text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              {module.description}
            </p>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className={`${module.progress} h-full bg-primary-container`}></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CoreModules;