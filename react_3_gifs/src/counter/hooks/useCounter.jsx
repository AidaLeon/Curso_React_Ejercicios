import { useState } from "react";

export const useCounter = (incialState = 10) => {
    const [counter, setCounter] = useState(incialState);

  const handleAdd = () => {
    setCounter(counter + 1);
    
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(incialState);
  };
  return{
    counter,
    handleAdd,
    handleSubtract,
    handleReset
  }
}
