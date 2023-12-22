import React, { useState } from 'react'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'

function CardV2() {
    const [like,setLike]= useState(0)

    function handleClick(){
        setLike(prev => prev+1)
    }

  return (
    <div style={{
        border: "1px solid #dc3c7c",
        borderRadius: "8px",
        marginBottom: "10px",
        padding: "10px",
    }}>
        <CardHeader like={like}/>

        <button onClick={handleClick}>Like</button>
        <ul>
            <li>Lorem, ipsum.</li>
            <li>Similique, deleniti.</li>
            <li>Esse, cupiditate!</li>
            <li>Facere, maiores.</li>
        </ul>

        <CardFooter like={like} setLike={setLike} handleClick={handleClick}/>
    </div>
  )
}

export default CardV2