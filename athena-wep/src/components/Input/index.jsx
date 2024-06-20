import "./styles.css"

function Input({ type, placeholder }) {
  return (
    <input type={type} placeholder={placeholder} className="input-container"/>
  )
}

export default Input
