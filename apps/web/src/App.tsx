import { useEffect, useState } from 'react'
import { api } from './shared/utils/api'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import AccessoriesApp from './modules/accessories/App'
import ChemicalsApp from './modules/chemicals/App'
import VlabApp from './modules/vlab/App'
import HomePage from './modules/public/pages/HomePage'
import MarqueeBar from './modules/public/components/MarqueeBar'
import TopNavbar from './modules/public/components/TopNavbar'
import Footer from './modules/public/components/Footer'
import MobileBottomNav from './modules/public/components/MobileBottomNav'
import FAB from './modules/public/components/FAB'

function ShellLayout({ status }: { status: string }) {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md">
      <MarqueeBar />
      <TopNavbar />
      <main className="pt-28 overflow-x-hidden">
        <Outlet context={{ status }} />
      </main>
      <Footer />
      <MobileBottomNav />
      <FAB />
    </div>
  )
}

function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    api.get('/health')
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus('API error'));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Full-screen modules without shell */}
        <Route path="/chemicals/*" element={<ChemicalsApp />} />
        <Route path="/vlab/*" element={<VlabApp />} />

        {/* Default shell with new design */}
        <Route element={<ShellLayout status={status} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/accessories" element={<AccessoriesApp />} />
          <Route path="/simulations" element={<VlabApp />} />
          <Route path="/inventory" element={<div className="p-8 text-center text-slate-400">Inventory page coming soon.</div>} />
          <Route path="/analysis" element={<div className="p-8 text-center text-slate-400">Analysis page coming soon.</div>} />
          <Route path="/documentation" element={<div className="p-8 text-center text-slate-400">Documentation page coming soon.</div>} />
          <Route path="*" element={<div className="p-8 text-center text-slate-400">Page not found.</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App