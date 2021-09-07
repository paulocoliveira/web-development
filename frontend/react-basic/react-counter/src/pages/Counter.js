import React, { useState, useEffect } from "react"

import "./Counter.css"

const Counter = () => {
    
    const [cont, setCounter] = useState(0)

    useEffect(() => {
        console.log("renderizou")
    }, [cont])

    const handleOnClick = operator => {
        const newValue = operator === "+"
        ? cont + 1
        : cont - 1

        setCounter(newValue)
    }
    
    return (
        <>
            <div className="counter">
                <span>{cont}</span>
                <button onClick={() => handleOnClick("-")}>-</button>
                <button onClick={() => handleOnClick("+")}>+</button>
            </div>
      </>
    )
  }
  
  export default Counter;