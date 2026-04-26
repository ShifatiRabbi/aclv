import React, { useState } from 'react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
  };

  return (
    <section className="px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto relative glass-panel p-8 md:p-12 rounded-3xl border border-primary-container/30 text-center overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl"></div>
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-950 flex items-center justify-center border border-primary-container/50 rounded-full">
          <span className="material-symbols-outlined text-primary-container">mail</span>
        </div>
        <h2 className="text-2xl md:text-3xl text-white mb-4 mt-4" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
          Stay Synthesized
        </h2>
        <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
          Receive critical updates on new simulation models, safety protocols, and technical deep-dives directly.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <div className="neumorphic-inset bg-slate-900/50 rounded-xl px-4 h-14 flex items-center flex-1">
            <span className="material-symbols-outlined text-slate-600 mr-3">mail</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-white placeholder-slate-600 w-full font-body-md outline-none"
              placeholder="researcher@lab.edu"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary-container text-on-primary-container h-14 px-8 rounded-xl uppercase neumorphic-outset hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            SUBSCRIBE TO ARCHIVE
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;