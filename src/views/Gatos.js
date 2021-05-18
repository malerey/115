import Button from '../components/Button'
import Persona from '../components/Persona'
const Gatos = () => {

//   // spread operator ... 

//   const arr = [2, 4, 6, 8]
//   const array = [1, 3, 5, 7]

// //  const copiaDelArray = ...arr // 1 2 3 4 5 6

// const copiaDelArray = [ "antes", ...array, "medio", ...arr, "al final" ] 
// console.log(copiaDelArray)

// const persona = {
//   nombre: "Lu",
//   apellido: "Di Lorenzo",
//   edad: 25
// }

// const compras = {
//   dineroEnCuenta: 50000,
//   datosTarjetaCredito : {
//     nombre: "Visa", 
//     numero: "03705657375979"
//   },
//   productos: [
//     {
//       id: 89, 
//       nombre: "acolchado para sofi"
//     }
//   ]
// }


// const nuevoObjeto = {
//   propiedadNueva: "hola",
//   ...persona,
//   otraPropiedad: "chau",
//   ...compras, 
// terceraPropiedad: 66666, 
//   array: [...arr], 
// }

// console.log(nuevoObjeto)


// destructuring en JS

// const persona = {
//   nombre: "Ana", 
//   apellido: undefined, 
//   profesion: "front end dev",
//   edad: 25, 
// }

// const nombrePersona = persona.nombre 
// const apellido = persona.apellido
// const profesion = persona.profesion

// const { 
//   nombre: nombrePersona,  // cambiar el nombre de la propiedad
//   apellido = "No se encontro un apellido",  // valores por defecto
//   profesion, 
//   coloresFavoritos = [] // valores por defecto
// } = persona

// console.log(apellido, coloresFavoritos)


const personas = [
  {
    nombre: "Ana", 
    apellido: "Laclau", 
    profesion: "front end dev",
    edad: 25, 
  }, 
  {
    nombre: "Maca", 
    apellido: undefined, 
    profesion: "front end dev",
    edad: 25, 
  }, 
  {
    nombre: "Meli", 
    apellido: "Dorado", 
    profesion: "front end dev",
    edad: 25, 
  }
]


// template literals 
// podemos usar variables para referirnos al nombre de las porpiedades de un objeto
const gato = {
  nombre: "trufa", 
  edad: 8
}

const prop = "nombre"

console.log(gato.nombre) // trufa
console.log(gato.prop) // undefined
console.log(gato["nombre"]) // trufa 
console.log(gato[prop]) // trufa 

  return (
    <>
    <h1>Hola soy Gatos</h1>
    {/* <h2>El apellido de la persona es {apellido}</h2> */}

    {
      personas.map(({nombre, apellido}) => (
        <Persona 
        nombre={nombre}
        apellido={apellido}
        />
      ))
    }

    {/* <h3>Uno de los colores favoritos de Ana es: {coloresFavoritos[0]}</h3> */}
    <Button 
      title="Hola"
      color="red"
    />

    
    </>
  )
}

export default Gatos
