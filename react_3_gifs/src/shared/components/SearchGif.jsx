import { useEffect, useState } from "react";
// los paréntesis {} en los parámetros desestructuran el objeto de props y extraen la propiedad mensaje.
export const SearchGif = ({ mensaje, handleSearch }) => {
  const [mensajeModificar, setMensajeModificar] = useState("");

  const handleSend = () => {
    handleSearch(mensajeModificar);
    setMensajeModificar("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    // setTimeout es una función que se ejecuta despues de un determinado tiempo
     const timeoutId= setTimeout(() => {
         handleSearch(mensajeModificar);
     }, 700);

     return () => {
         // clearTimeout es una función que se ejecuta cuando se desmonta el componente
         clearTimeout(timeoutId);
     }
    
    //   añadimos handleSearch y mensajeModificar porque solo queremos que se ejecute cuando cambie el mensaje o el handleSearch
  }, [mensajeModificar, handleSearch]);

  return (
    <div className="search-container">
        
      <input
        type="text"
        placeholder={mensaje}
        value={mensajeModificar}
        onChange={(e) => setMensajeModificar(e.target.value)}
        // onKeyDown hace que se ejecute una función cuando se presiona una tecla
        onKeyDown={handleKeyDown} 
      />

      <button onClick={handleSend}>Buscar</button>

    </div>

  );
};

