import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Continent({ continentName }) {

    const [continent, setContinent] = useState([])

    function handleDeleteDestination(id) {
        const updatedDestinations = continent.filter((cont) => cont.id !== id);
        setContinent(updatedDestinations)
    } 

    useEffect(()=>{
        fetch(`http://localhost:9292/continent/${continentName}`)
        .then(res => res.json())
        .then(res => setContinent(res))
    }, [continentName])

    const renderDestinations = continent.map((a) => {
        return <CountryCard key={a.id} id={a.id} destination={a.destination} geography={a.geography} rating={a.rating} countryName={a.country.country_name} continent={a.country.continent} language={a.country.language} tourist={a.tourist.name} onDestDelete={handleDeleteDestination} setContinent={setContinent}/>
    });

    return (
        <div> 
           {renderDestinations}
        </div>
    )
    
}

export default Continent;