import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './shared/layouts/MainLayout'
import AdminLayout from './shared/layouts/AdminLayout'
import StudentLayout from './shared/layouts/StudentLayout'

const AccessoriesApp = lazy(() => import('./modules/accessories/App'))
const ChemicalsApp = lazy(() => import('./modules/chemicals/App'))
const VlabApp = lazy(() => import('./modules/vlab/App'))
const HomePage = lazy(() => import('./modules/public/pages/HomePage'))
const ElementsPage = lazy(() => import('./modules/elements/pages/ElementsPage'))
const AdminDashboardPage = lazy(() => import('./modules/admin/pages/AdminDashboardPage'))
const StudentDashboardPage = lazy(() => import('./modules/student/pages/StudentDashboardPage'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-8 text-center text-on-surface-variant">Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/chemicals/*" element={<ChemicalsApp />} />
            <Route path="/vlab/*" element={<VlabApp />} />
            <Route path="/simulations" element={<VlabApp />} />
            <Route path="/elements" element={<ElementsPage />} />
            <Route path="/accessories" element={<AccessoriesApp />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
          </Route>

          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<StudentDashboardPage />} />
          </Route>

          <Route path="/teacher" element={<StudentLayout />}>
            <Route index element={<StudentDashboardPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App