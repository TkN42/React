import React from 'react'

function ImgThumbnail({imgSrc,imgAlt}) {

    const imgStyle = {
        padding : "4px",
        borderRadius : "8px",
        border: "1px solid red",
        width: "50%",
        boxSizing : "border-box",
        marginBottom: "5px"
    };

  return (
    <img src={imgSrc} alt={imgAlt} style={imgStyle} />
  )
}

export default ImgThumbnail