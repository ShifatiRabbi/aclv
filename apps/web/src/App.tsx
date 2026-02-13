import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { api } from './shared/utils/api'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AccessoriesApp from './modules/accessories/App'
import ChemicalsApp from './modules/chemicals/App'

function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    api.get('/health')
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus('API error'));
  }, []);

  return (
    <BrowserRouter>
      <div className="container mt-5 text-center">
        <h1 className="text-2xl font-bold text-blue-600">Advanced Chemical Lab Visualization</h1>
        <p className="mt-3">{status}</p>
        <nav>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/accessories" className="mx-2">Accessories</Link>
          <Link to="/chemicals" className="mx-2">Chemicals</Link>
          {/* Add more links for other modules like chemicals, etc., as needed */}
        </nav>
        <Routes>
          <Route path="/" element={<div>Welcome to the platform. Select a module above.</div>} />
          <Route path="/accessories" element={<AccessoriesApp />} />
          <Route path="/chemicals" element={<ChemicalsApp />} />
          {/* Add more routes for other modules as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
