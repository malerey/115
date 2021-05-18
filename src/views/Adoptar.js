import { useState } from 'react' 

const Adoptar = () => {
  const [form, setForm] = useState({
    nombre: "",
    edad: 0, 
    sexo: "f", 
    provincia: "ba"
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // const handleChangeInputNombre = (e) => {
  //   setForm({ ...form, nombre: e.target.value })
  // }

  // const handleChangeInputEdad = (e) => {
  //   setForm({ ...form, edad: e.target.value })
  // }

  // const handleChangeSexo = (e) => {
  //   setForm({ ...form, sexo: e.target.value })
  // }

  // const handleChangeProvincia = (e) => {
  //   setForm({...form, provincia: e.target.value})
  // }

  const handleChange = (e, nombreDeLaPropiedad) => {
    setForm({...form, [nombreDeLaPropiedad]: e.target.value})
  }

  console.log(form)

  return (
    <section>
    <h1>Hola soy Adoptar</h1>

    <form onSubmit={handleSubmit}>
      
      <div>
     Nombre 
     <input 
        value={form.nombre} 
        onChange={(e) => handleChange(e, "nombre")} 
        type="text"

      />
     </div>

     <div>
     Edad 
      <input 
        type="number"
        value={form.edad}
        onChange={(e) => handleChange(e, "edad")} 

      />
     </div>

     <div>
     <p>Genero del gatito buscado</p>
        Masculino 
        <input 
        type="radio" 
        name="sexo" 
        value="m" 
        onChange={(e) => handleChange(e, "sexo")} 
        checked={form.sexo === "m"} 
        />
        Femenino 
        <input 
        type="radio" 
        name="sexo" 
        value="f" 
        onChange={(e) => handleChange(e, "sexo")} 
        checked={form.sexo === "f"} 
        />
        Indiferente 
        <input 
        type="radio"
         name="sexo" 
        value="i" 
        onChange={(e) => handleChange(e, "sexo")} 
        checked={form.sexo === "i"} 
        />
     </div>

     Provincia
     <select onChange={(e) => handleChange(e, "provincia")}  value={form.provincia}>
       <option value="ba">Buenos Aires</option>
       <option value="cba">Cordoba</option>
       <option value="mdz">Mendoza</option>
     </select>
    

    <input type="submit" value="Enviar"></input>

    </form>
    </section>
  )
}

export default Adoptar
