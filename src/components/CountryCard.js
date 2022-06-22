import React from "react";

function CountryCard({ id, countryName, continent, language, tourist, destination, onDestDelete, rating, geography }) {

    function handleRemoveDestination() {
        fetch(`http://localhost:9292/destination/${id}`, {
            method: "DELETE",
        });

        onDestDelete(id)
    }

    return (
        <div>
            <h2>Destination: {destination}</h2>
            <p>Country: {countryName}</p>
            <p>Continent: {continent.charAt(0).toUpperCase() + continent.substring(1)}</p>
            <p>Spoken language: {language}</p>
            <p>Tourist: {tourist.charAt(0).toUpperCase() + tourist.substring(1)}</p>
            <p>Rating: {rating}</p>
            <p>Geography: {geography}</p>
            <button onClick={handleRemoveDestination}>Isildur - cast it into the fire!</button>
        </div>
    )
}

export default CountryCard;
