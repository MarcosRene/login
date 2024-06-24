import { Link } from "react-router-dom"
import Button from "../../../components/Button"
import Input from "../../../components/Input"

import "./styles.css"

function SignIn() {
  return (
    <div className="sign-in-container">
      <h1>
        Gerencie <br />
        seus <br />
        <span>horários</span>.
      </h1>

      <form>
        <Input type="email" placeholder="E-mail" />

        <Input type="password" placeholder="Senha" />

        <Link to="/sign-up" href="https://google.com" target="_target">Cadastre-se aqui 👈</Link>
        
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  )
}

export default SignIn