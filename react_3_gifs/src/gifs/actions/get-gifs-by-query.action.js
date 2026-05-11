import { giphyApi } from '../api/giphy.api'; // importar la instancia
/** @typedef {import('../interfaces/gif.interface').Gif} Gif */

/**
 * Obtiene una lista de GIFs según el término de búsqueda
 * @param {string} query - Término de búsqueda para buscar GIFs
 * @returns {Promise<Gif[]>} Array de GIFs con id, url, title, width y height
 */
export const getGifsByQuery = async (query) => {
  if(query.trim().length === 0) return [];
  const response = await giphyApi.get('/search', {
    params: {
      q: query,
      limit: 10,
    },
  });
  
  return response.data.data.map((gif) => ({
    id: gif.id,
    url: gif.images.downsized.url,
    title: gif.title,
    width: gif.images.original.width,
    height: gif.images.original.height,
  }));
};
