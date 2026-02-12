import React from "react";

interface Props {
  sidebar: React.ReactNode;
  viewer: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ sidebar, viewer }) => {
  return (
    <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      <aside className="lg:col-span-4 space-y-6">{sidebar}</aside>
      <section className="lg:col-span-8 space-y-6">{viewer}</section>
    </main>
  );
};

export default MainLayout;
