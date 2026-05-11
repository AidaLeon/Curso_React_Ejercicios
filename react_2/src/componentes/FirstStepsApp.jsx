import { ItemCounter } from "../shopping-cart/ItemCounter";

const productosCarrito = [
  { nombre: "Nintendo Switch", cantidad: 10 },
  { nombre: "PlayStation 5", cantidad: 5 },
  { nombre: "Xbox Series X", cantidad: 3 },
];

export const FirstStepsApp = () => {

  
  return (
    <>
      <h1>Carrito de compra </h1>

      {productosCarrito.map((producto) => (
        <ItemCounter
          key={producto.nombre}
          nombre={producto.nombre}
          numero={producto.cantidad}
        />
      ))}

    </>
  );
}
