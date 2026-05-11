
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { SearchGif } from "./shared/components/SearchGif";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  
  const {previousSearches, gifs, handleSearch, handleTermClick} = useGifs();

  return (
    <>
      <CustomHeader
        title="Buscador de gifs"
        description="descubre y comparte el gif perfecto"
      />

      <SearchGif mensaje="Buscar gifs..." handleSearch={handleSearch} />

      {/* busquedas lo ponemos destro de {} porque es un array de strings y no un objeto */}
      <PreviousSearches
        title="Busquedas recientes"
        busquedas={previousSearches}
        handleTermClick={handleTermClick}
      />

      <GifList gifs={gifs} />
    </>
  );
};
