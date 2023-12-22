import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import EkBilgi from './EkBilgi'
import 'bootstrap/dist/css/bootstrap.min.css';

function CardOdev() {
    
    const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit((parseFloat(value) * 9 / 5 + 32).toFixed(2));
    setKelvin((parseFloat(value) + 273.15).toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
    setKelvin((((parseFloat(value) - 32) * 5 / 9) + 273.15).toFixed(2));
  };

  const handleKelvinChange = (e) => {
    const value = e.target.value;
    setKelvin(value);
    setCelsius((parseFloat(value) - 273.15).toFixed(2));
    setFahrenheit((((parseFloat(value) - 273.15) * 9 / 5) + 32).toFixed(2));
  };

  return (
    <div className="container" style={{ maxWidth: '80%' }}> 
      {/* <Header onChangePage={handleChangePage}/> */}
      <div className="row"> 
        <div className="col-md-8 mx-auto"> 
          <label>Celsius:</label>
          <input type="text" placeholder='℃' className="form-control" value={celsius} onChange={handleCelsiusChange} />

          <label>Fahrenheit:</label>
          <input type="text" placeholder='℉' className="form-control" value={fahrenheit} onChange={handleFahrenheitChange} />

          <label>Kelvin:</label>
          <input type="text" placeholder='K' className="form-control" value={kelvin} onChange={handleKelvinChange} />
        </div>
      </div>

      <hr />
      <EkBilgi tur="sicaklik" />
      <hr />

      <Footer />
    </div>
  );

}

export default CardOdev