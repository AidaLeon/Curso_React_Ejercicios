import { useState } from "react";

export const useCounter = (initialvalue: number = 1) => {

    const [counter, setCounter] = useState(initialvalue);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubtract = () => {
        if (counter<= 1) return;
        
        setCounter(counter - 1);
    }

  

    return {
        counter,
        handleAdd,
        handleSubtract
        
    }
}
