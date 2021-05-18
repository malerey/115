const Persona = ({nombre, apellido = "No disponible"}) => {
  return (
    <h5>{nombre} {apellido}</h5>
  )
}

export default Persona
