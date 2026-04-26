import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: 'home', label: 'Home' },
    { path: '/inventory', icon: 'inventory_2', label: 'Inventory' },
    { path: '/simulations', icon: 'biotech', label: 'Sims' },
    { path: '/analysis', icon: 'analytics', label: 'Data' },
    { path: '/accessories', icon: 'settings', label: 'Config' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-slate-950/60 backdrop-blur-2xl border-t border-white/10 h-20 md:hidden flex justify-around items-center px-4">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center gap-1 ${
            location.pathname === item.path ? 'text-primary-container' : 'text-slate-500 hover:text-slate-200'
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={location.pathname === item.path ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            {item.icon}
          </span>
          <span className="uppercase text-[10px] font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default MobileBottomNav;