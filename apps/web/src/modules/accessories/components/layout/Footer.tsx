import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-12 px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-black text-primary-container uppercase tracking-tight">NEUROCHEM_LAB</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-sm">
              Advancing scientific research through high-fidelity virtual simulation and molecular precision environments.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-primary">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a className="text-white/35 hover:text-primary-container text-sm transition-colors" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a className="text-white/35 hover:text-primary-container text-sm transition-colors" href="#">
                    Safety Protocols
                  </a>
                </li>
                <li>
                  <a className="text-white/35 hover:text-primary-container text-sm transition-colors" href="#">
                    API Access
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-primary">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a className="text-white/35 hover:text-primary-container text-sm transition-colors" href="#">
                    Research Ethics
                  </a>
                </li>
                <li>
                  <a className="text-white/35 hover:text-primary-container text-sm transition-colors" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-primary">Status</h4>
            <div className="glass-panel rounded-2xl p-4 border border-white/10">
              <p className="text-white/40 text-xs leading-relaxed">
                © {new Date().getFullYear()} NEUROCHEM Virtual Labs. Molecular precision secured.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <p className="text-[10px] text-white/20 tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} NEUROCHEM VIRTUAL LABS. MOLECULAR PRECISION SECURED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
