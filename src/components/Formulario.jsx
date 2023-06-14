import {useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)
  

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
    
  }, [paciente])  
 

  const gererarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha;

  }  

  const hadleSubmit = (e) => {
    e.preventDefault()
    
    // Validacion de formulario 
    if([ nombre, propietario, email, fecha, sintomas ].includes('')){
      setError(true)
      return;
    }

    setError(false)

    // Objeto de Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      
    }

    if(paciente.id){
      // console.log('Editando')
      // Editando el Registro
      objetoPaciente.id = paciente.id      
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      // console.log('nuevo registro')
      // Nuevo Registro
      objetoPaciente.id = gererarId() // Agrega el Id al objetoPaciente
      setPacientes([...pacientes, objetoPaciente])
      
    }

    
     

    //  Reiniciar el formulario
     setNombre('')
     setPropietario('')
     setEmail('')
     setFecha('')
     setSintomas('')
  }
  

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center ">
        Seguimiento Pacientes
      </h2>

      <p className="text-lg mt-5 text-center mb-8">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form 
          onSubmit={hadleSubmit}
          className="bg-white shadow-md rounded-lg py-6 px-5 mb-10 text-gray-700 uppercase font-bold">

        { error && <Error>
                    <p>Todos los campos son obligatorios</p>
                  </Error>}

        <div className="mb-5">
          <label htmlFor="mascota" className="block">
            Nombre Mascota 
          </label>
          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la Mascota" 
            className="border-2 text-sm w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            autoFocus
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block">
            Nombre Propietario
          </label>
          <input 
            id="propietario"
            type="text" 
            placeholder="Nombre del Propietario" 
            className="border-2 text-sm w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input 
            id="email"
            type="email" 
            placeholder="Email Contacto Propietario" 
            className="border-2 text-sm w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block">
            Alta
          </label>
          <input 
            id="alta"
            type="date"
            className="border-2 text-sm w-full text-gray-400 p-2 mt-2 rounded-md focus"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block">
            Sintomas
          </label>
          <textarea 
            id="sintomas"
            className="border-2 text-sm w-full p-2 mt-2 placeholder rounded-md"
            placeholder="Describe los Sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md cursor-pointer hover:bg-indigo-700 transition-all"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  );
};

export default Formulario;
