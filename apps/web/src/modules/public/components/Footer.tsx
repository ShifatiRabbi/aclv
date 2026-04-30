import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 pt-16 pb-24 md:pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary-container text-xl">science</span>
            <span className="text-xl font-bold text-white/90" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Reaxorium
            </span>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            Chemistry learning platform for virtual labs, molecules, and experiment-grade workflows.
          </p>
        </div>
        
        <div>
          <h4 className="text-primary-container text-xs uppercase tracking-widest mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
            Protocols
          </h4>
          <ul className="space-y-3">
            <li><Link to="/vlab" className="text-slate-600 hover:text-orange-400 text-sm transition-colors">Inorganic Chem</Link></li>
            <li><Link to="/vlab" className="text-slate-600 hover:text-orange-400 text-sm transition-colors">Organic Synthesis</Link></li>
            <li><Link to="/vlab" className="text-slate-600 hover:text-orange-400 text-sm transition-colors">Physical Dynamics</Link></li>
            <li><Link to="/vlab" className="text-slate-600 hover:text-orange-400 text-sm transition-colors">Analytical Labs</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-primary-container text-xs uppercase tracking-widest mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
            Network
          </h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-slate-600 hover:text-orange-400 text-sm transition-colors">Research Licensing</a></li>
            <li><a href="#" className="text-slate-600 hover:text-orange-400 text-sm transition-colors">API Status</a></li>
            <li><a href="#" className="text-slate-600 hover:text-orange-400 text-sm transition-colors">Support Node</a></li>
            <li><Link to="/documentation" className="text-slate-600 hover:text-orange-400 text-sm transition-colors">Documentation</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-primary-container text-xs uppercase tracking-widest mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
            Terminal
          </h4>
          <div className="flex gap-4 mb-6">
            <a href="#" className="h-10 w-10 glass-panel rounded-full flex items-center justify-center text-slate-500 hover:text-primary-container transition-all">
              <span className="material-symbols-outlined">code</span>
            </a>
            <a href="#" className="h-10 w-10 glass-panel rounded-full flex items-center justify-center text-slate-500 hover:text-primary-container transition-all">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="h-10 w-10 glass-panel rounded-full flex items-center justify-center text-slate-500 hover:text-primary-container transition-all">
              <span className="material-symbols-outlined">memory</span>
            </a>
          </div>
          <p className="text-[10px] tracking-widest uppercase text-slate-700" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
            © 2024 Reaxorium - Shifati Rabbi. All rights reserved.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-wrap gap-6 text-[10px] text-slate-600 uppercase tracking-widest" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
        <a href="#" className="hover:text-orange-400">Privacy Protocol</a>
        <a href="#" className="hover:text-orange-400">Research Ethics</a>
        <a href="#" className="hover:text-orange-400">API Access</a>
        <a href="#" className="hover:text-orange-400">Support</a>
      </div>
    </footer>
  );
};

export default Footer;