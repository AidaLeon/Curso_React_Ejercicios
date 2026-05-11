import React from "react";
import { useState } from "react";

export const Boton = () => {

    const [count, setCount] = useState(0);

    const sumar = () => {
        setCount(count + 1);
    };


    return (
        <div>
            <button onClick={sumar}>Sumar</button>
            <p>Contador: {count}</p>
        </div>
    )
     
};