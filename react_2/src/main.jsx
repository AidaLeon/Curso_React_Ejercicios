import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './componentes/FirstStepsApp'
import { MyAwesomeApp } from './componentes/MyAwesomeApp'
import { ItemCounter } from './shopping-cart/ItemCounter'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstStepsApp />
    {/* <MyAwesomeApp /> */}
    
  </StrictMode>,
)
