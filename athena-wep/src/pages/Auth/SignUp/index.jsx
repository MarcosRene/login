import { Link } from "react-router-dom"
import Button from "../../../components/Button"
import Input from "../../../components/Input"

import "./styles.css"

function SignUp() {
  return (
    <div className="sign-up-container">
      <form>
        <h1>Crie sua conta</h1>

        <Input type="email" placeholder="E-mail" />

        <Input placeholder="Nome" />

        <Input type="password" placeholder="Senha" />

        <Input type="password" placeholder="Confirmar senha" />
          
        <Link href="https://google.com" target="_target">Voltar para login 👈</Link>

        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  )
}

export default SignUp