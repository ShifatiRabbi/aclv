import React from 'react';
import { Link } from 'react-router-dom';
import StatsSection from '../components/StatsSection';
import CoreModules from '../components/CoreModules';
import KineticVisualization from '../components/KineticVisualization';
import ResearchLog from '../components/ResearchLog';
import NewsletterSection from '../components/NewsletterSection';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-12 relative min-h-[90vh] flex items-center particle-bg">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-container/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-tertiary-container/10 rounded-full blur-[120px]"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full w-fit border border-white/5">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-primary-container" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                System Ready
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl leading-tight text-white uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}>
              Virtual <span className="text-primary-container">Laboratory</span> Experience
            </h1>
            <p className="text-lg text-slate-400 max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
              Enter a safe, immersive digital environment for high-fidelity chemical research and molecular precision. Harness the power of real-time data analysis.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/simulations"
                className="bg-primary-container text-on-primary-container font-label-md h-14 px-8 rounded-full neumorphic-outset flex items-center justify-center gap-2 hover:brightness-110 transition-all uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                EXPLORE LABS
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                to="/documentation"
                className="glass-panel text-white h-14 px-8 rounded-full uppercase border border-white/20 hover:bg-white/10 transition-all flex items-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                Documentation
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative aspect-square w-full glass-panel rounded-full border border-white/5 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 via-transparent to-transparent"></div>
            <img
              alt="3D molecular structure glowing with neon orange and blue light"
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,122,24,0.2)]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAviJRIq6zd3ebmYMHhGd60lbRXyY3HYkdIG6fCIEmdPRVIDiqw3abdgQ5l6uBcwtAlp5szCqiFPZ157M92UBOoWsDWQpbx9EV9tn4D3rKEDkmKo5_oWL_H7lKi0E34EMIFuO-c3yhoXgpfCENdn-q8h63DRK3QQ3XbU5jSpfAiA-fO7xr9tVb4q5lb8HQUIEFRTfkiTwhspz90PdIBBLkqDzYh-4C3R6MQfdfd1_sQDYOp8k2kOkpvzJdq7Xy9pD6dsjh9wGtx-oA"
            />
          </div>
        </div>
      </section>

      <StatsSection />
      <CoreModules />
      <KineticVisualization />
      <ResearchLog />
      <NewsletterSection />
      <CTASection />
    </>
  );
};

export default HomePage;