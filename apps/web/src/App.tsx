import { useEffect, useState } from 'react'
import { api } from './shared/utils/api'

function App() {
  const [status, setStatus] = useState('Loading...')

  useEffect(() => {
    api.get('/health')
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus('API error'))
  }, [])

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-2xl font-bold text-blue-600">
        MERN Platform
      </h1>
      <p className="mt-3">{status}</p>
    </div>
  )
}

export default App
