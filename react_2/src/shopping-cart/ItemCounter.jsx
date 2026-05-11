import { useState } from "react";
import "./ItemCounter.css";

export const ItemCounter = (props) => {
  const { nombre, numero } = props;

  const [num, setNumero] = useState(numero);


  const sumar = () => {
    
    setNumero(num + 1);
  };

  const restar = () => {
    // para no dejar valores negativos
    if (num<=0) return;
    setNumero(num - 1);
  };

  return (
    <section className="item-row"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: "10px",
      // }}
    >
      <span className="item-text" style={{color: num===0 ? 'red' : 'black' }}>{nombre}</span>

      <button onClick={sumar}>+1</button>
      <span>{num}</span>
      <button onClick={restar}>-1</button>
    </section>
  );
};
