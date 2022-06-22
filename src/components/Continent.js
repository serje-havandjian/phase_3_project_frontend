import React, { useEffect, useState } from "react"

function Continent(){

    const [test, setTest] = useState("")

    useEffect(()=>{
        fetch("http://localhost:9292/destinations")
        .then(res => res.json())
        .then(res => setTest(res))
    }, [])

    console.log(test)
    
    return(
        <div> 
            <h2></h2>
      </div>
    )
    
}

export default Continent