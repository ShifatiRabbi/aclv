import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 px-6 text-center bg-gradient-to-t from-primary-container/10 to-transparent">
      <h2 className="text-3xl md:text-5xl mb-10 uppercase max-w-3xl mx-auto leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}>
        Start Your Reaxorium <span className="text-primary-container">Journey</span> Today
      </h2>
      <Link
        to="/vlab"
        className="inline-flex bg-primary-container text-on-primary-container px-10 py-5 rounded-full text-lg uppercase tracking-[0.2em] neumorphic-outset hover:drop-shadow-[0_0_30px_rgba(255,122,24,0.5)] transition-all active:scale-95"
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
      >
        Access Reaxorium Dashboard
      </Link>
    </section>
  );
};

export default CTASection;