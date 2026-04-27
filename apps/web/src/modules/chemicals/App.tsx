import { Routes, Route, Navigate } from 'react-router-dom'
import Lab from './pages/Lab'

export default function ChemicalsApp() {
  return (
    <Routes>
      <Route path="/" element={<Lab />} />
      <Route path="*" element={<Navigate to="/chemicals" replace />} />
    </Routes>
  )
}
