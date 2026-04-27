import React from 'react';
import { Link } from 'react-router-dom';

const FAB: React.FC = () => {
  return (
    <Link
      to="/vlab"
      className="fixed bottom-24 right-6 z-50 h-16 w-16 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container shadow-[0_0_20px_rgba(255,122,24,0.5)] active:scale-90 transition-all md:hidden"
    >
      <span
        className="material-symbols-outlined text-3xl"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        add
      </span>
    </Link>
  );
};

export default FAB;