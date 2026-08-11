import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DeleteAccountPage from './pages/DeleteAccountPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DeleteAccountPage />} />
        <Route path="/regle-confidentiel" element={<PrivacyPolicyPage />} />
        <Route path="/politique-confidentialite" element={<Navigate to="/regle-confidentiel" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
