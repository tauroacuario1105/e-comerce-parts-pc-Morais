import React, {useState} from 'react'


export const Clock = () => {

    const [time, setTime] = useState(new Date ())

    const handleTimer = () =>{
        setTime( new Date())
    }

    return(
        <div onClick={handleTimer}>
            <h2>Hora Local</h2>
            <p>{time.toLocaleString()}</p>
        </div>
    )
}