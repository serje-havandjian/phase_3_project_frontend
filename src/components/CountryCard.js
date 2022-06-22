import React from "react";

function CountryCard({ countryName, continent, language, tourist, destination }) {
    return (
        <div>
            <p>Country: {countryName}</p>
            <p>Continent: {continent.charAt(0).toUpperCase() + continent.substring(1)}</p>
            <p>Spoken language: {language}</p>
            <p>Tourist: {tourist.charAt(0).toUpperCase() + tourist.substring(1)}</p>
            <p>Destination: {destination}</p>
        </div>
    )
}

export default CountryCard;
