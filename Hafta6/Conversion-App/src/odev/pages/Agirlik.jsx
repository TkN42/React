import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import EkBilgi from './EkBilgi';
import 'bootstrap/dist/css/bootstrap.min.css';

function AgirlikCevirici() {
  const [kilogram, setKilogram] = useState('');
  const [pound, setPound] = useState('');
  const [stone, setStone] = useState('');
  const [ons, setOns] = useState('');

  const handleKilogramChange = (e) => {
    const value = e.target.value;
    setKilogram(value);
    setPound((parseFloat(value) * 2.20462).toFixed(2));
    setStone((parseFloat(value) * 0.157473).toFixed(2));
    setOns((parseFloat(value) * 35.274).toFixed(2));
  };

  const handlePoundChange = (e) => {
    const value = e.target.value;
    setPound(value);
    setKilogram((parseFloat(value) / 2.20462).toFixed(2));
    setStone((parseFloat(value) / 14).toFixed(2));
    setOns((parseFloat(value) * 16).toFixed(2));
  };

  const handleStoneChange = (e) => {
    const value = e.target.value;
    setStone(value);
    setKilogram((parseFloat(value) / 0.157473).toFixed(2));
    setPound((parseFloat(value) * 14).toFixed(2));
    setOns((parseFloat(value) * 224).toFixed(2));
  };

  const handleOnsChange = (e) => {
    const value = e.target.value;
    setOns(value);
    setKilogram((parseFloat(value) / 35.274).toFixed(2));
    setPound((parseFloat(value) / 16).toFixed(2));
    setStone((parseFloat(value) / 224).toFixed(2));
  };

  return (
    <div className="container" style={{ maxWidth: '80%' }}>
      {/* <Header /> */}
      
      <div className="row">
        <div className="col-md-8 mx-auto">
          <label>Kilogram:</label>
          <input type="text" placeholder='kg' className="form-control" value={kilogram} onChange={handleKilogramChange} />

          <label>Pound:</label>
          <input type="text" placeholder='lb' className="form-control" value={pound} onChange={handlePoundChange} />

          <label>Stone:</label>
          <input type="text" placeholder='st' className="form-control" value={stone} onChange={handleStoneChange} />

          <label>Ons:</label>
          <input type="text" placeholder='oz' className="form-control" value={ons} onChange={handleOnsChange} />
        </div>
      </div>

      <hr />
      <EkBilgi tur="agirlik"/>
      <hr />

      <Footer />
    </div>
  );
}

export default AgirlikCevirici;
