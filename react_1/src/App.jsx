
import './App.css'
import { Boton } from './componentes/Boton'
import { BuscadorPokemon } from './componentes/BuscadorPokemon'

function App() {
 

  return (
    <div>
      <h1>Contador</h1>
      <Boton/>
      <hr />
      <h1>Buscador de Pokémon</h1>
      <BuscadorPokemon/>
    </div>
  )
}

export default App
