import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import EkBilgi from './EkBilgi';
import 'bootstrap/dist/css/bootstrap.min.css';

function UzunlukCevirici() {
  const [kilometre, setKilometre] = useState('');
  const [mil, setMil] = useState('');
  const [yard, setYard] = useState('');
  const [fit, setFit] = useState('');
  const [inch, setInch] = useState('');

  const handleKilometreChange = (e) => {
    const value = e.target.value;
    setKilometre(value);
    setMil((parseFloat(value) * 0.621371).toFixed(2));
    setYard((parseFloat(value) * 1094).toFixed(2));
    setFit((parseFloat(value) * 3281).toFixed(2));
    setInch((parseFloat(value) * 39370).toFixed(2));
  };

  const handleMilChange = (e) => {
    const value = e.target.value;
    setMil(value);
    setKilometre((parseFloat(value) / 0.621371).toFixed(2));
    setYard((parseFloat(value) * 1760).toFixed(2));
    setFit((parseFloat(value) * 5280).toFixed(2));
    setInch((parseFloat(value) * 63360).toFixed(2));
  };

  const handleYardChange = (e) => {
    const value = e.target.value;
    setYard(value);
    setKilometre((parseFloat(value) / 1094).toFixed(2));
    setMil((parseFloat(value) / 1760).toFixed(2));
    setFit((parseFloat(value) * 3).toFixed(2));
    setInch((parseFloat(value) * 36).toFixed(2));
  };

  const handleFitChange = (e) => {
    const value = e.target.value;
    setFit(value);
    setKilometre((parseFloat(value) / 3281).toFixed(2));
    setMil((parseFloat(value) / 5280).toFixed(2));
    setYard((parseFloat(value) / 3).toFixed(2));
    setInch((parseFloat(value) * 12).toFixed(2));
  };

  const handleInchChange = (e) => {
    const value = e.target.value;
    setInch(value);
    setKilometre((parseFloat(value) / 39370).toFixed(2));
    setMil((parseFloat(value) / 63360).toFixed(2));
    setYard((parseFloat(value) / 36).toFixed(2));
    setFit((parseFloat(value) / 12).toFixed(2));
  };

  return (
    <div className="container" style={{ maxWidth: '80%' }}>
      {/* <Header /> */}

      <div className="row">
        <div className="col-md-8 mx-auto">
          <label>Kilometre:</label>
          <input type="text" placeholder='km' className="form-control" value={kilometre} onChange={handleKilometreChange} />

          <label>Mil:</label>
          <input type="text" placeholder='mi' className="form-control" value={mil} onChange={handleMilChange} />

          <label>Yard:</label>
          <input type="text" placeholder='yd' className="form-control" value={yard} onChange={handleYardChange} />

          <label>Fit:</label>
          <input type="text" placeholder='ft' className="form-control" value={fit} onChange={handleFitChange} />

          <label>Inch:</label>
          <input type="text" placeholder='in' className="form-control" value={inch} onChange={handleInchChange} />
        </div>
      </div>

      <hr />
      <EkBilgi tur="uzunluk" />
      <hr />

      <Footer />
    </div>
  );
}

export default UzunlukCevirici;
