import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './shared/layouts/MainLayout'
import { RoleLabLayout } from './shared/layouts/RoleLabLayout'
import { ProtectedRoute } from './shared/components/ProtectedRoute'
import { useAuthBootstrap } from './modules/auth/hooks/useAuthBootstrap'

const AccessoriesApp = lazy(() => import('./modules/accessories/App'))
const ChemicalsApp = lazy(() => import('./modules/chemicals/App'))
const VlabApp = lazy(() => import('./modules/vlab/App'))
const HomePage = lazy(() => import('./modules/public/pages/HomePage'))
const ElementsPage = lazy(() => import('./modules/elements/pages/ElementsPage'))
const AdminDashboardPage = lazy(() => import('./modules/admin/pages/AdminDashboardPage'))
const AdminFeedbackPage = lazy(() => import('./modules/admin/pages/AdminFeedbackPage'))
const StudentDashboardPage = lazy(() => import('./modules/student/pages/StudentDashboardPage'))
const TeacherDashboardPage = lazy(() => import('./modules/teacher/pages/TeacherDashboardPage'))
const StaffDashboardPage = lazy(() => import('./modules/staff/pages/StaffDashboardPage'))
const LoginPage = lazy(() => import('./modules/auth/pages/LoginPage'))
const RegisterPage = lazy(() => import('./modules/auth/pages/RegisterPage'))
const ForgotPasswordPage = lazy(() => import('./modules/auth/pages/ForgotPasswordPage'))
const ResetPasswordPage = lazy(() => import('./modules/auth/pages/ResetPasswordPage'))
const VerifyEmailPage = lazy(() => import('./modules/auth/pages/VerifyEmailPage'))
const BlogListPage = lazy(() => import('./modules/blogs/pages/BlogListPage'))
const BlogDetailPage = lazy(() => import('./modules/blogs/pages/BlogDetailPage'))

function App() {
  useAuthBootstrap()

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
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
            <Route path="/auth/verify-email" element={<VerifyEmailPage />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['super_admin', 'admin']} />}>
            <Route path="/admin" element={<RoleLabLayout title="Admin Laboratory OS" />}>
              <Route index element={<AdminDashboardPage />} />
              <Route path="feedback" element={<AdminFeedbackPage />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route path="/student" element={<RoleLabLayout title="Student Laboratory OS" />}>
              <Route index element={<StudentDashboardPage />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
            <Route path="/teacher" element={<RoleLabLayout title="Teacher Laboratory OS" />}>
              <Route index element={<TeacherDashboardPage />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['staff']} />}>
            <Route path="/staff" element={<RoleLabLayout title="Staff Laboratory OS" />}>
              <Route index element={<StaffDashboardPage />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App