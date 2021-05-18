const Button = ({ title: titulo, color = "azul" }) => {
  return (
    <button className={color}>{titulo}</button>
  )
}

export default Button
