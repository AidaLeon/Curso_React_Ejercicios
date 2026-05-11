import { useState } from "react";

export const MyAwesomeApp = () => {
  const datosrandom = {
    calle: "Calle Falsa 123",
    ciudad: "Springfield",
    pais: "USA",
  };

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const hobbies = ["Programar", "Viajar", "Cocinar"];
  const [edad, setEdad] = useState(0);
  const [kpoper, setKpoper] = useState(false);
  const [mostrarDatos, setMostrarDatos] = useState(null);

  //
  const sumarEdad = () => {
    setEdad(edad + 1);
  };

  const guardarDatos = () => {
    const datos = {
      nombre: nombre.toLowerCase(),
      apellido: apellido.toLowerCase(),
      edad,
      hobbies,
      kpoper,
    };

    setMostrarDatos(datos);

    setNombre("");
    setApellido("");
    setEdad(0);
    setKpoper(false);
  };

  const estilos = {
    backgroundColor: "purple",
    color: "white",
    padding: "10px",
    marginTop: "10px",
  }; 

  return (
    <>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <br />

      <label htmlFor="apellido">Apellido</label>
      <input
        type="text"
        id="apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        placeholder="Escribe tu apellido"
      />
      <br />

      <label htmlFor="edad">Edad</label>
      <input
        type="number"
        id="edad"
        value={edad}
        onChange={(e) => setEdad(parseInt(e.target.value))}
      />
      <button onClick={sumarEdad}>Sumar edad</button>
      <br />

      <label htmlFor="kpop">¿Eres kpopero?</label>
      <select
        name="kpop"
        id="kpop"
        value={kpoper}
        onChange={(e) => setKpoper(e.target.value === "true")}
      >
        <option value="false">No</option>
        <option value="true">Sí</option>
      </select>
      <br />

      <button onClick={guardarDatos}>Guardar</button>

      {mostrarDatos && (
        <div style={estilos}>
          <h2>Datos guardados:</h2>
          <p>
            Nombre:{" "}
            {mostrarDatos.nombre.charAt(0).toUpperCase() +
              mostrarDatos.nombre.slice(1)}
          </p>
          <p>
            Apellido:{" "}
            {mostrarDatos.apellido.charAt(0).toUpperCase() +
              mostrarDatos.apellido.slice(1)}
          </p>
          <p>Edad: {mostrarDatos.edad}</p>
          <p>Hobies: {mostrarDatos.hobbies.join(", ")}</p>
          {/*  join convierte un array en un string */}
          <p>¿Eres kpopero?: {mostrarDatos.kpoper ? "Sí" : "No"}</p>

          {datosrandom && (
            <>
              <p>Calle: {datosrandom.calle}</p>
              <p>Ciudad: {datosrandom.ciudad}</p>
              <p>País: {datosrandom.pais}</p>
            </>
          )}
        </div>
      )}
    </>
  );
};
