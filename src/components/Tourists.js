import React, { useState, useEffect } from "react";

function Tourists({ allTourists, setAllTourists }) {
    const [ newTourist, setNewTourist ] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/tourists`)
        .then(res => res.json())
        .then(res => setAllTourists(res))
    }, [])

    const renderAllTourists = allTourists.map((tourist) => {
       return <p>{tourist.name}</p>
    })

    console.log(allTourists, "allTourists")

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

    return (
        <div>
            <h1>Add a new tourist!</h1>
            {renderAllTourists}
            <form onSubmit={submitNewTourist}>
                <label>Enter tourist name:</label><br></br>
                <input id="touristForm" onChange={newTouristName} name="touristname" type="text" placeholder="Add new tourist..."></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Tourists;