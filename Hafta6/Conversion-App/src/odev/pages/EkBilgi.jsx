import React from 'react';
import { sicaklikBilgi, agirlikBilgi, uzunlukBilgi } from '../data/ekBilgi';

function EkBilgi({ tur }) {
  let bilgi;
  switch (tur) {
    case 'sicaklik':
      bilgi = sicaklikBilgi;
      break;
    case 'agirlik':
      bilgi = agirlikBilgi;
      break;
    case 'uzunluk':
      bilgi = uzunlukBilgi;
      break;
    default:
      bilgi = null;
  }

  return <div>{bilgi}</div>;
}

export default EkBilgi;
