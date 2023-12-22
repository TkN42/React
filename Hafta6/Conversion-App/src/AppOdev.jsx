import React, { useState } from 'react';
import './odev/styles/odev.css';
import SicaklikCevirici from './odev/pages/Sicaklik';
import AgirlikCevirici from './odev/pages/agirlik';
import UzunlukCevirici from './odev/pages/Uzunluk';
import Header from './odev/pages/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';

function AppOdev() {
  const [currentPage, setCurrentPage] = useState('temperature');

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header onChangePage={handleChangePage} />
      {currentPage === 'temperature' && <SicaklikCevirici />}
      {currentPage === 'weight' && <AgirlikCevirici />}
      {currentPage === 'length' && <UzunlukCevirici />}
    </>
  );
}

export default AppOdev;
