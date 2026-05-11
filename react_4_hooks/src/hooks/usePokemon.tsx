
import { useState, useEffect } from "react";

interface Pokemon {
    name: string;
    imageUrl: string;
    id: number;
}


interface Props {
    id: number;
}

export const usePokemon = ({id}: Props) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const getPokemon = async (id: number) => {
        setIsLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await response.json();
        setPokemon({
            name: pokemon.name,
            imageUrl: pokemon.sprites.front_default,
            id: pokemon.id,
        });

        setIsLoading(false);
    };

    useEffect(() => {
        getPokemon(id);
    }, [getPokemon, id]);



 

    return{

        pokemon,
        isLoading,
        formatId: id.toString().padStart(3, '0'),
    
    }
}
