import React from "react";

function CountryCard({ id, countryName, continent, language, tourist, destination, onDestDelete, rating, geography }) {

    function handleRemoveDestination() {
        fetch(`https://safe-springs-49026.herokuapp.com/destination/${id}`, {
            method: "DELETE",
        });

        onDestDelete(id);
    }

    function capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.substring(1);
    }

    function capitalizeString(string) {
        return string.split(' ').map((word) => capitalizeWord(word)).join(' ');
    }

    return (
        <div class="row">
            <div class="column">
                <div class="card">
                    <h2>Destination: {capitalizeString(destination)}</h2>
                    <p>Country: {capitalizeString(countryName)}</p>
                    <p>Continent: {capitalizeString(continent)}</p>
                    <p>Spoken Language: {capitalizeString(language)}</p>
                    <p>Tourist: {capitalizeString(tourist)}</p>
                    <p>Rating: {rating}</p>
                    <p>Geography: {capitalizeString(geography)}</p>
                    <button id="isildur" onClick={handleRemoveDestination}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CountryCard;
