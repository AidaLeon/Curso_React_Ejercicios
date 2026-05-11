import React, { useRef } from 'react'
import { useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
    const [previousSearches, setPreviousSearches] = useState([]);
    const [gifs, setGifs] = useState([]);

    // useRef hace que persista el valor de la variable
    const gifsCache= useRef([]);
    
      const handleSearch = async (term) => {


        term = term.toLocaleLowerCase().trim();
        if (!term) return;
        if (previousSearches.includes(term)) return;
        setPreviousSearches(
          // para agregar un elemento al inicio
          [term, ...previousSearches].slice(0, 8),
        );
    
        const gifs = await getGifsByQuery(term);
    
        setGifs(gifs);
        // guardamos los gifs en el cache
        gifsCache.current[term] = gifs;
      };
    
      const handleTermClick = async (term) => {

        // buscamos el gif en el cache
        if (gifsCache.current[term]) {
          setGifs(gifsCache.current[term]);
          return;
        } 
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
         gifsCache.current[term] = gifs;
      };
  return {
    previousSearches,
    gifs,
    handleSearch,
    handleTermClick
  }
}
