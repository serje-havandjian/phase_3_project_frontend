import React, { useState, useEffect } from "react";

function Tourists({ allTourists, setAllTourists, allCountries, setAllCountries }) {
    const [ newTourist, setNewTourist ] = useState([]);
    const [ destination, setDestination ] = useState("");
    const [ geography, setGeography ] = useState("");
    const [ rating, setRating ] = useState();
    const [ touristId, setTouristId ] = useState();
    const [ countryId, setCountryId ] = useState();
    const [ touristToEdit, setTouristToEdit ] = useState();
    const [ id, setId ] = useState();

    useEffect(()=>{
        fetch(`http://localhost:9292/tourists`)
        .then(res => res.json())
        .then(res => setAllTourists(res))
    }, [])

    useEffect(()=>{
        fetch(`http://localhost:9292/countries`)
        .then(res => res.json())
        .then(res => setAllCountries(res))
    }, [])

    function updateTourists(obj){
        const updatedTourists = allTourists.map((tourist) => {
            return tourist.id === obj.id ? obj : tourist
        });
        setAllTourists(updatedTourists)
    }

    const renderAllTourists = allTourists.map((tourist) => {
       return <button name={tourist.name} value={tourist.id} onClick={sendTouristToEdit}>{tourist.name}</button>
    });

    function sendTouristToEdit(e) {
        setTouristToEdit(e.target.name);
        setId(e.target.value);
    }

    function changeTouristName(e) {
        let newName = e.target.value;
        setTouristToEdit(newName);
    }

    function handleEditName(e) {
        const touristObj = { id: id, name: touristToEdit }

        fetch(`http://localhost:9292/tourists/${id}`, {
            method: "PATCH", 
            headers: {
              "Content-Type": "application/json",
              "Accepts": "application/json",
            },
            body: JSON.stringify(touristObj)
          })
          .then((resp) => resp.json())
          .then((data) => updateTourists(data));

          e.target.reset();
    }

    function newTouristName(e) {
        e.preventDefault();
        setNewTourist(e.target.value);
    } 

    function submitNewTourist(e) {
        e.preventDefault();
        
        const newTouristObj = {
            name: newTourist
        };

        fetch("http://localhost:9292/tourists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTouristObj)
        })
        .then(resp => resp.json())
        .then(data => setAllTourists([...allTourists, data]))

        e.target.reset();
    } 

    function handleDestination(e) {
        setDestination(e.target.value);
    }

    function handleGeography(e) {
        setGeography(e.target.value);
    }

    function handleRating(e) {
        setRating(e.target.value);
    }

    function submitNewDestination(e) {
        e.preventDefault();

        const newDestinationObj = {
            destination: destination,
            geography: geography,
            rating: rating,
            tourist_id: touristId,
            country_id: countryId
        };

        fetch("http://localhost:9292/destinations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newDestinationObj)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

        e.target.reset();
    }

    const renderEachTourist = allTourists.map((tourist) => {
        return <option value={tourist.id}>{tourist.name}</option>
    })

    function handleTouristId(e) {
        setTouristId(e.target.value);
    }

    // const findTouristId = allTourists.filter((tourist) => {
    //     console.log(tourist, "this is tourist")
    //     if (tourist.name === touristId)
    //     return tourist.id;
    // })

    const renderEachCountry = allCountries.map((country) => {
        return <option value={country.id}>{country.country_name}</option>
    })

    function handleCountryId(e) {
        setCountryId(e.target.value);
    }

    return (
        <div>
            <h1>Add a new tourist!</h1>
            <form onSubmit={submitNewTourist}>
                <label>Enter tourist name:</label><br></br>
                <input id="touristForm" onChange={newTouristName} name="touristname" type="text" placeholder="Add new tourist..."></input>
                <button type="submit">submit</button>
            </form>
            <h1>Edit a tourist</h1>
            <form onSubmit={handleEditName}>
                <input value={touristToEdit} onChange={changeTouristName} placeholder="Edit Tourist Name..."></input>
                <button type="submit">edit</button>
            </form>
            {renderAllTourists}
            <h1>Add a new destination!</h1>
            <form onSubmit={submitNewDestination}>
                <label>Enter destination:</label><br/>
                <input onChange={handleDestination} name="destination" type="text" placeholder="Add destination..."></input>
                <input onChange={handleGeography} name="geography" type="text" placeholder="Add geography..."></input>
                <input onChange={handleRating} name="rating" type="integer" placeholder="Add rating..."></input>
                <select onChange={handleTouristId}>
                    <option value="" selected>Select a tourist</option>
                    {renderEachTourist}
                </select>
                <select onChange={handleCountryId}>
                    <option value="" selected>Select a country</option>
                    {renderEachCountry}
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Tourists;