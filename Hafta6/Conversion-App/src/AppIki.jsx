import React from 'react';
import Sayac from './components/Sayac';
import MultipleImages from './components/MultipleImages';
import CardWithState from './components/CardWithState';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppIki() {

  return (
    <>
        <Sayac/>
        <hr />
        <h3>Görsek Şöleni</h3>
        <MultipleImages/>

        <hr />

        <h3>Card With States</h3>
        <CardWithState/>
        <CardWithState/>
        <CardWithState/>
    </>
  )

}

export default AppIki