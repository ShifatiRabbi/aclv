import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TopNavbar: React.FC = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/simulations', label: 'Simulations' },
    { path: '/inventory', label: 'Inventory' },
    { path: '/analysis', label: 'Analysis' },
    { path: '/documentation', label: 'Documentation' },
  ];

  return (
    <header className="fixed top-8 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-6 md:px-12 h-20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <Link to="/" className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary-container text-2xl orange-glow">science</span>
        <span className="text-xl md:text-2xl font-bold tracking-tighter text-primary-container orange-glow" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          NEUROCHEM_LAB
        </span>
      </Link>
      
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-label-md text-sm uppercase tracking-wider transition-all ${
              location.pathname === link.path
                ? 'text-primary-container border-b-2 border-primary-container pb-1'
                : 'text-slate-400 hover:text-orange-400'
            }`}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      
      <div className="flex items-center gap-4">
        <Link
          to="/simulations"
          className="hidden md:block bg-primary-container text-on-primary-container font-label-md px-6 py-2.5 rounded-full text-xs neumorphic-outset hover:shadow-[0_0_15px_rgba(255,122,24,0.3)] transition-all active:scale-95 uppercase tracking-wider"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          START SIMULATION
        </Link>
        <button className="md:hidden text-on-surface p-2 rounded-full hover:bg-white/5 active:scale-95 transition-all">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;