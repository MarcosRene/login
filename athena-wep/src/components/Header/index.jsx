import { LogOut } from "lucide-react"
import "./styles.css"

const profile = {
  name: "Marcos Renê",
  email: "marcosrenedev@gmail.com",
  avatar: "https://github.com/MarcosRene.png"
}

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-infor">
          <span>{profile.name}</span>
          <span>{profile.email}</span>
        </div>

        {profile.avatar ? (
          <img src={profile.avatar} alt="Imagem do usuário" />
        ) : (
          <div className="profile-preview">{"Marcos".slice(0,2)}</div>
        )}
      
        <button className="button-logout">
          <LogOut size={20} />
        </button>
      </div>
    </div>
  )
}

export default Header