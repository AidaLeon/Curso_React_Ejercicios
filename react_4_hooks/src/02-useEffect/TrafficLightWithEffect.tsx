import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

// esto sirve para tipar el tipo 
type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
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


  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">


        <h1 className="text-white text-3xl items-center space-y-8">Semaforo con useEffect</h1>
        <h2 className="text-white text-xl">Tiempo restante: {seconds}</h2>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div className={"bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"}
          style={{width: `${(seconds/5)*100}%`}}>

          </div>
        </div>



        <div
          className={`w-32 h-32 ${color === "red" ? colors[color] : "bg-gray-500"} rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${color === "yellow" ? colors[color] : "bg-gray-500"} rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${color === "green" ? colors[color] : "bg-gray-500"} rounded-full`}
        ></div>

      </div>
    </div>
  );
};
