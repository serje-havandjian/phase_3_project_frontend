import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Continent({ continentName }) {

    const [continent, setContinent] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/continent/${continentName}`)
        .then(res => res.json())
        .then(res => setContinent(res))
    }, [continentName])

    console.log(continentName)

    const renderDestinations = continent.map((a) => {
        return <CountryCard key={a.id} destination={a.destination} countryName={a.country.country_name} continent={a.country.continent} language={a.country.language} tourist={a.tourist.name}/>
    });

    return (
        <div> 
           {renderDestinations}
        </div>
    )
    
}

export default Continent;