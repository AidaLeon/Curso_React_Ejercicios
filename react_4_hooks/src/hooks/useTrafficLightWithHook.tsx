import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};
type TrafficLightColor = keyof typeof colors;


export const useTrafficLigthWithHook = () => {



   const [color, setColor] = useState<TrafficLightColor>("red");
  const [seconds, setSeconds] = useState(5);



  useEffect(() => {
    if (seconds === 0) {
      return;
    }
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {

    if (seconds > 0) return;
    
    setSeconds(5);  

      if (color === "red") {
        setColor("yellow");
        
      }else if (color === "yellow") {
        setColor("green");
      }else if (color === "green") {
        setColor("red");
      }

    
    
  }, [seconds, color]);


  return {color, seconds, colors,
    percentage: ((seconds/5)*100),
    redLigth:  color === "red" ? colors[color] : "bg-gray-500",
    yellowLigth:  color === "yellow" ? colors[color] : "bg-gray-500",
    greenLigth:  color === "green" ? colors[color] : "bg-gray-500",
  };

}