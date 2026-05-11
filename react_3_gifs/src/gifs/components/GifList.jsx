
// gifs como props el cual abrimos de nuevo en gifs y de ahi saca gif uno a uno
export const GifList = (gifs) => {
    return (
        <div className="gifs-container">
        {gifs.gifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title} />
            <h3>{gif.title}</h3>
            <p>
              {gif.width} x {gif.height} (1.5mb)
            </p>
          </div>
        ))}
      </div>
    );
};