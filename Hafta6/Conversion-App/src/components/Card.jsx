import React from 'react'
import ImgThumbnail from './ImgThumbnail'

function Card({ title,imgSrc,imgAlt,children,...rest }) {

    const cardStyle ={
        padding: "10px",
        borderRadius: "8px",
        border: "1px solid red",
        boxSizing: "border-box",
        marginBottom: "5px"
    }


  return (
    <div style={cardStyle}>
        <ImgThumbnail imgSrc={imgSrc} imgAlt={imgAlt}/>
        <h2>{title}</h2>
        {rest.dataId}
        <hr />
        {children}
    </div>
  )
}

export default Card