import React from "react";

function CountryCard({ countryName, continent, language, tourist, destination }) {
    return (
        <div>
            <h1>Country: {countryName}</h1>
            <p>Continent: {continent.charAt(0).toUpperCase() + continent.substring(1)}</p>
            <p>Spoken language: {language}</p>
            <p>Tourist: {tourist}</p>
            <p>Destination: {destination}</p>
        </div>
    )
}

export default CountryCard;
