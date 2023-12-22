import React from 'react'
import './Urun.css'

function Urun(props) {
    return (
      <div className={props.className}>
        <hr />
        <h3>Urun Adi</h3>
        <p>{props.urunAdi}</p>
      </div>
    );
  }
  
  export default Urun;