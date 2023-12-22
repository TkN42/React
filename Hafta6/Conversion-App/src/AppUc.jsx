import { useState } from "react"

function AppUc() {

    const pictureIDs=[49,211,222,103,44]
    const [imgId,setImgId]= useState(pictureIDs[0])

    const getLoremPicsumImg = (id,width=800,height=350) => `https://picsum.photos/id/${id}/${width}/${height}`

    function resimDegis(id){
        setImgId(id)
    }

  return (
    <main className="container">
        <hgroup>
            <h2>Mini Görsel Uygulaması</h2>
            <h3>Görsel</h3>
        </hgroup>
        <img
            style={{ width:'100%'}} 
            src={getLoremPicsumImg(imgId)} 
            alt="" 
        />

        <div className="grid" style={{marginTop:"30px"}}>
            {
                pictureIDs.map((item,i)=>
                <div key={i}>
                    <img
                        onClick={()=>resimDegis(item)}
                        src={getLoremPicsumImg(item,100,100)}
                        alt={item}
                    />
                </div>
                )
            }
        </div>
    </main>
  )
}

export default AppUc