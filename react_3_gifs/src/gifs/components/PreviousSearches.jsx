export const PreviousSearches = ({title, busquedas, handleTermClick}) => {
    return (
        <div className="previous-searches"> 
            <h2>{title}</h2>
            <ul className="previous-searches-list"> 
                {busquedas.map((busqueda) => (
                    <li key={busqueda} onClick={() => handleTermClick(busqueda)}>{busqueda}</li>
                ))}
            </ul>
        </div>
    )
};
