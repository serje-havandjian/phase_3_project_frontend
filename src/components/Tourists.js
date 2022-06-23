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
       return <button id="touristButton" name={tourist.name} value={tourist.id} onClick={sendTouristToEdit}>{tourist.name}</button>
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
        <>
            <h1>Travel the world while you still can....</h1>
                <img src="https://www.allplacesmap.com/maps/world-map-with-continents.jpg" alt="map" usemap="#worldmap" class="image"/>
                <map name="worldmap">
                    <area shape="poly" coords="1110, 641, 1125, 582, 1165, 563, 1183, 548, 1216, 537, 1237, 540, 1254, 566, 1264, 537, 1315, 608, 1275, 670, 1235, 674, 1190, 639" alt="australia" href="http://localhost:3000/australia" />
                    <area shape="poly" coords="848, 149, 834, 161, 835, 158, 866, 229, 819, 231, 827, 249 813, 260, 829, 283, 760, 259, 739, 274, 723, 296, 685, 295, 663, 283, 602, 297, 586, 284, 592, 260, 591, 225, 614, 190, 722, 137, 837, 140" alt="europe" href="http://localhost:3000/europe" />
                    <area shape="poly" coords="1195, 525, 1266, 169, 854, 107, 848, 149, 834, 161, 835, 158, 866, 229, 819, 231, 827, 249 813, 260, 829, 283, 786, 267, 745, 273, 753, 297, 777, 298, 776, 327, 821, 414, 891, 360, 984, 449, 1027, 366, 1096, 512" alt="asia" href="http://localhost:3000/asia" />
                    <area shape="poly" coords="15, 153, 610, 69, 472, 173, 272, 361, 319, 413, 254, 460" alt="north_america" href="http://localhost:3000/northamerica" />
                    <area shape="poly" coords="300, 443, 463, 528, 369, 767, 253, 522, 380, 480, 356" alt="south_america" href="http://localhost:3000/southamerica" />
                    <area shape="poly" coords="663, 293, 775, 325, 825, 425, 849, 544, 707, 649, 547, 373, 603, 296" alt="africa" href="http://localhost:3000/africa" />
                    <area shape="rect" coords="9, 813, 1353, 913" alt="antarctica" href="http://localhost:3000/antarctica" />
                </map>
            <div class="form">
                <form onSubmit={submitNewTourist}>
                    <label>Add a new tourist:</label><br></br>
                    <input id="touristForm" onChange={newTouristName} name="touristname" type="text" placeholder="Whisper to me your name..."></input>
                    <button class="submitButton" type="submit">submit</button>
                </form>
                <form onSubmit={handleEditName} id="editTourist">
                    <label>Select a tourist to edit:</label><br></br>
                    {renderAllTourists} <br></br>
                    <input value={touristToEdit} onChange={changeTouristName} placeholder="Edit Tourist Name..."></input>
                    <button class="submitButton" type="submit">edit</button>
                </form>
                <form onSubmit={submitNewDestination}>
                    <label>Enter a new destination:</label><br></br>
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
                    <button class="submitButton" type="submit">submit</button>
                </form>
            </div>
        </>
    )
}

export default Tourists;