import { useState } from 'react'
import Urun from './components/Urun'
import './App.css'
import { IMAGES,INFO } from './data'
import ImgThumbnail from './components/ImgThumbnail'
import Card from './components/Card'
import SartliRendering from './components/SartliRendering'

function App() {

  return (
    <>
      <Urun className="urun" urunAdi="Bilgisayar"/>
      <Urun className="urun" urunAdi="Telefon"/>
      <Urun className="urun" urunAdi="Kulaklık"/>
      <hr />
      <h2>Optional Chain</h2>
      {
        INFO.products?.map((product,i)=> <li key={i}>{product}</li>)
      }
      <hr />
      <h3>Şartlı Renderin Kısmı</h3>
      <SartliRendering isActive={true} isLoading={false}/>
      <hr />
      <Card
      title="Yeni Lorem Ipsum Dolor" 
      imgSrc="https://picsum.photos/id/237/400/250" 
      imgAlt="Card Bilgisi">
        <p>Yeni, ipsum dolor.</p>
        <p>Nesciunt, qui expedita.</p>
        <p>Aliquid, illum blanditiis!</p>
      </Card>
      <Card
      dataId="123"
      title="2023 Lorem Ipsum Dolor" 
      imgSrc="https://picsum.photos/id/123/400/250" 
      imgAlt="Card Bilgisi">
        <p>2023, ipsum dolor.</p>
        <p>Nesciunt, qui expedita.</p>
        <p>Aliquid, illum blanditiis!</p>
      </Card>
      <hr />
      {
        IMAGES.map((item,index)=><ImgThumbnail imgSrc={item} key={item} imgAlt={index}/>)
      }
    </>
  )
}

export default App
