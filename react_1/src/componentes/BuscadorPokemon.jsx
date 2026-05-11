import React, { useState, useEffect } from 'react';
import '../styles/BuscadorPokemon.css';

export const BuscadorPokemon = () => {
  const [nombrePokemon, setNombrePokemon] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [mostrarBotonAgregar, setMostrarBotonAgregar] = useState(false);
  const [pokemonesPersonalizados, setPokemonesPersonalizados] = useState([]);

  // Cargar pokémons personalizados al montar el componente
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('pokemonesPersonalizados')) || [];
    setPokemonesPersonalizados(guardados);
  }, []);

  const buscarPokemon = async (e) => {
    e.preventDefault();
    
    if (!nombrePokemon.trim()) {
      setError('Por favor ingresa un nombre');
      return;
    }

    setCargando(true);
    setError('');
    setPokemon(null);
    setMostrarBotonAgregar(false);

    const nombreMinuscula = nombrePokemon.toLowerCase();

    try {
      const respuesta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombreMinuscula}`
      );
      
      if (!respuesta.ok) {
        // Si no existe en la API, verificar si existe en localStorage
        if (pokemonesPersonalizados.includes(nombreMinuscula)) {
          setPokemon({
            nombre: nombreMinuscula.charAt(0).toUpperCase() + nombreMinuscula.slice(1),
            imagen: null,
            tipos: [],
            altura: 'N/A',
            peso: 'N/A',
            experiencia: 'Personalizado',
            esPersonalizado: true,
          });
        } else {
          setError('Pokémon no encontrado');
          setMostrarBotonAgregar(true);
        }
        return;
      }

      const datos = await respuesta.json();
      setPokemon({
        nombre: datos.name.charAt(0).toUpperCase() + datos.name.slice(1),
        // coge la pirmer a y la pasa a mayuscula y las otras las deja igual sumas la P con ikachu
        imagen: datos.sprites.other['official-artwork'].front_default || datos.sprites.front_default,
        tipos: datos.types.map(tipo => tipo.type.name),
        
        altura: datos.height / 10,
        peso: datos.weight / 10,
        experiencia: datos.base_experience,
        esPersonalizado: false,
      });
      setNombrePokemon('');
    } catch (err) {
      setError(err.message || 'Error al buscar el Pokémon');
      setPokemon(null);
    } finally {
      setCargando(false);
    }
  };

  const agregarPokemonPersonalizado = () => {
    if (!nombrePokemon.trim()) {
      setError('Por favor ingresa un nombre válido');
      return;
    }

    const nombreMinuscula = nombrePokemon.toLowerCase();
    const guardados = JSON.parse(localStorage.getItem('pokemonesPersonalizados')) || [];

    if (guardados.includes(nombreMinuscula)) {
      setError('Este Pokémon ya fue agregado');
      return;
    }

    guardados.push(nombreMinuscula);
    localStorage.setItem('pokemonesPersonalizados', JSON.stringify(guardados));
    setPokemonesPersonalizados(guardados);

    setPokemon({
      nombre: nombreMinuscula.charAt(0).toUpperCase() + nombreMinuscula.slice(1),
      imagen: null,
      tipos: [],
      altura: 'N/A',
      peso: 'N/A',
      experiencia: 'Personalizado',
      esPersonalizado: true,
    });

    setNombrePokemon('');
    setMostrarBotonAgregar(false);
    setError('');
  };

  return (
    <div className="buscador-container">
      <form onSubmit={buscarPokemon} className="buscador-form">
        <div className="form-group">
          <label htmlFor="nombrePokemon">Nombre</label>
          <input
            id="nombrePokemon"
            type="text"
            placeholder="escribe el nombre"
            value={nombrePokemon}
            onChange={(e) => setNombrePokemon(e.target.value)}
            className="input-buscar"
          />
        </div>
        <div className="botones-form">
          <button type="submit" className="boton-buscar" disabled={cargando}>
            {cargando ? 'Buscando...' : 'Buscar'}
          </button>
          {mostrarBotonAgregar && (
            <button 
              type="button" 
              className="boton-agregar" 
              onClick={agregarPokemonPersonalizado}
            >
              Agregar Pokémon
            </button>
          )}
        </div>
      </form>

      {error && <p className="error">{error}</p>}

      {pokemon && (
        <div className="pokemon-resultado">
          <h2>{pokemon.nombre}</h2>
          {pokemon.imagen && <img src={pokemon.imagen} alt={pokemon.nombre} className="pokemon-imagen" />}
          {pokemon.esPersonalizado && <p className="personalizado-badge">Pokémon Personalizado</p>}
          <div className="pokemon-info">
            <p><strong>Tipos:</strong> {pokemon.tipos.length > 0 ? pokemon.tipos.join(', ') : 'N/A'}</p>
            <p><strong>Altura:</strong> {pokemon.altura} m</p>
            <p><strong>Peso:</strong> {pokemon.peso} kg</p>
            <p><strong>Experiencia base:</strong> {pokemon.experiencia}</p>
          </div>
        </div>
      )}
    </div>
  );
};
