import React,{useState} from 'react'
import ImgThumbnail from './ImgThumbnail'

function MultipleImages() {
    const [imageCounter,setImageCounter] = useState(1)

    function handleClick(event) {
        console.log(event.target.id);
        event.target.id=="add"?
        setImageCounter(prev=>prev+1):
        setImageCounter(prev=>prev>0?prev-1:prev)
    }

  return (
    <>
        <button id="add" onClick={handleClick}>Yeni Görsel Ekle</button>
        <button id="subtrack" onClick={handleClick}>Görsel Sil</button>
        <hr />
        {
            [...Array(imageCounter)].map((item,index) => <ImgThumbnail key={index} 
            imgSrc={`https://picsum.photos/id/${200+index}/110/110`}/> )
        }
    </>
  )
}

export default MultipleImages