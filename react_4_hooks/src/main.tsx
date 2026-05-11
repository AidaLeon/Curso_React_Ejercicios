import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TasksApp } from './05-useReducer/TaskApp'
// import { FocusSceren } from './04-useRef/FocusSceren'
// import { PokemonPage } from './03-examples/PokemonPage'
  // import { TrafficLight } from './01-useState/TrafficLight'
  // import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithHook'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusSceren /> */}
    <TasksApp />
  </StrictMode>,
)
