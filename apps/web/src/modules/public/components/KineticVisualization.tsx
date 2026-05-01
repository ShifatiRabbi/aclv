import React from 'react';

const KineticVisualization: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="text-3xl mb-6 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, letterSpacing: '-0.01em' }}>
            Real-Time <br /><span className="text-primary-container">Kinetic Visualization</span>
          </h2>
          <p className="text-lg text-on-surface-variant mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Experience zero-latency molecular interactions. Our Synthetic Aurora engine processes millions of calculations per second to deliver physically accurate results directly to your browser.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container">check_circle</span>
              <span style={{ fontFamily: "'Inter', sans-serif" }}>Sub-atomic precision physics engine</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container">check_circle</span>
              <span style={{ fontFamily: "'Inter', sans-serif" }}>Dynamic thermal conductivity models</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container">check_circle</span>
              <span style={{ fontFamily: "'Inter', sans-serif" }}>Gas evolution and pressure monitoring</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 relative">
          <div className="glass-panel p-2 rounded-xl overflow-hidden aspect-video border-primary-container/20 shadow-2xl">
            <img
              className="w-full h-full object-cover"
              alt="Futuristic UI showing titration experiment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy5y2xTsN0KpnjUILpQ6GQofkVsBuS5KpIKzRXcDOHOq6wuX0bTjng9hfxrP-5qGN8Wna4ODZgCQC5Jjny-eneo3t53HsvL4Nr8guxrfsGsNwsxR0mgqXw45bHDSA6YdKKIBTp1BzTiFjQ_u4dYTGpdM3f8Fe52Wml5uqySchp3Hh9XluDOXXKSGJgFOuCvFtM0wLc3ZxCkLYsAg8nFKWvnpOyQaVVBedq_QUNJnvq7pCz_3T1emzZ7WVj2h56TTvM_j5SUUpva1w"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg hover:scale-110 transition-transform neumorphic-outset">
                <span className="material-symbols-outlined text-4xl">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KineticVisualization;