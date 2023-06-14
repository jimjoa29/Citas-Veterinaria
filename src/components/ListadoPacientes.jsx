import Pacientes from "./Pacientes";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // console.log(pacientes && pacientes.length);

 
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className=" text-lg mt-5 mb-8 text-center">
            Administras tus {""}
            <span className=" text-indigo-600 font-bold py-6 ">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Pacientes 
              key={paciente.id} 
              paciente={paciente} 
              setPaciente={setPaciente}    
              eliminarPaciente={eliminarPaciente}        
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className=" text-lg mt-5 mb-8 text-center">
            Comienza agregando pacientes {""}
            <span className=" text-indigo-600 font-bold py-6 ">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
