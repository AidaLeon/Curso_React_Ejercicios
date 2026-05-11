import { useRef } from "react"

export const FocusSceren = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = () =>{
        console.log(inputRef.current?.value);
        inputRef.current?.select();              
    }
  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white"> Focus Screen</h1>
        <input type="text" className="bg-white text-black px-4 py-2 rounded-md" autoFocus />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={onClick}>Set focus</button>
    </div>
  )
}
