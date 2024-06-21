import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import AuthLayout from './pages/layout/Auth'
import AppLayout from './pages/layout/App'
import Schedules from './pages/App/Schedules'

import './styles.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        <Route path="/" element={<AppLayout />}>
          <Route path="schedules" element={<Schedules />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
