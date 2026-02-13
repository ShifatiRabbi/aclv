import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-800">
          Chemical Glasses
        </h1>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-indigo-600 font-semibold"> Simulator </a>
          <a href="#" className="text-slate-500 font-semibold"> Safety Specs </a>
          <a href="#" className="text-slate-500 font-semibold"> Catalog </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
