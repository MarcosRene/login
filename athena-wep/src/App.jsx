// import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import AuthLayout from './pages/layout/Auth'

import './styles.css'

function App() {
  return (
    <AuthLayout>
      <SignUp />
      {/* <SignIn /> */}
    </AuthLayout>
  )
}

export default App
