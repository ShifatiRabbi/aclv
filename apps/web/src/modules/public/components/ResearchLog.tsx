import React from 'react';

const articles = [
  {
    date: 'March 12, 2024',
    title: 'Quantum Chemistry Updates',
    description: 'Integrating orbital hybridization models for high-energy carbon chains.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq12dK0SFEIrhIA5ytWWEkjCeFHcyqnXYCpWlmLHA44MdbaXZ5tguHogAyDQFmdiCRg_85eTPyOKatDS7sdnzWcXrhfjSKHYLdCc3DFhIfbzUtLpEUN_D83J7dI29aeQH3-TrwppZYD3R88_z9XovDVxrO7NupZ9A0lcpDUwBudTxcPRVaoWmCA_2m5xRZLD53y2twQytfxpKNRSOtuZ8mkxYafnuPr1y91KacLhdGC6komfYk5c0DUrdOFvE8vgE9UM9pRGQdJkE',
  },
  {
    date: 'Feb 28, 2024',
    title: 'The Future of E-Learning',
    description: 'How virtual environments are reshaping laboratory safety standards.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-E5QMZUbssCL5her996NAzVoJb3apSyYds-Nuk49gwHyphr-qyjLKg_YlZzalFQCvmQaEfT1OuqJF326mDubz-YV4Zc-nTVf9UBtNn6VQW5Nas8TC73bkCTzxNY913G7El-bkcIWh925PluIgs_usacbl8mW6njDcbyjMXV2CP3qP6cXja5XrI2mA8x-SzJ4XbBjOZ1IU8e7pvxMHNJY9vvVsttDFMGHxTS6h1IDzfI6YMMRS4H0AtcLOcuJ4V0V5SSLhonBbG0w',
  },
  {
    date: 'Feb 15, 2024',
    title: 'Simulation Engine 4.0',
    description: 'Breaking down the new multi-threaded titration solver efficiency.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA13yYEW66vdI7zNOVYN2fDnSJW0VPBcc7BXRV5yPAN8huQ3VgBNI3y-6Bl67cX4uoHO8OIgciU0LKPR6HO87LUYgNTbL-k4O3sTFQD7p1bmos9UgIYjMqBvrJ6Y0kq05wFtHIVGfCNJuhM70SYhONErpsVgu9awFr0Ygrxd-SvP_mYnSLlN0yPKn08zJ4L9E3bNFrLLyiSb_UpZjhqOZr69-A05sKh-2WtEYEo3M9_ocZSzFVJ-TRoP7xycRD8Usy2lUk9PjMDbEc',
  },
];

const ResearchLog: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl text-center mb-16 uppercase tracking-tighter" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, letterSpacing: '-0.01em' }}>
        Research <span className="text-primary-container">Log</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.title} className="glass-panel overflow-hidden group rounded-2xl">
            <div className="h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt={article.title}
                src={article.image}
              />
            </div>
            <div className="p-8">
              <span className="text-xs text-primary-container uppercase tracking-widest mb-2 block" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                {article.date}
              </span>
              <h4 className="text-xl mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                {article.title}
              </h4>
              <p className="text-on-surface-variant mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                {article.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary-container uppercase tracking-wider group-hover:gap-4 transition-all"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                Read Protocol <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchLog;