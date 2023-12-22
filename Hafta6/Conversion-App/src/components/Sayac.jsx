import {useState} from 'react'

function Sayac() {

    const [sayac, setSayac] = useState(0)

    function handleClick() {
        console.log("Click");
        setSayac(sayac+1)

    }

  return (
    <>
        <h1>State Konusu</h1>
        <h2>Sayaç : {sayac}</h2>
        <button onClick={handleClick}>Sayaç Artır</button>
    </>
  )
}

export default Sayac