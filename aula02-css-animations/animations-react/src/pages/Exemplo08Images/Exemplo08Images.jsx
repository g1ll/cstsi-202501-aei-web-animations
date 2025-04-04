import React from 'react'
import boatImage from '/assets/img/image.jpg';
import cssFile from '/css/imagemfundo.css?url';

const Exemplo08Images = () => {
  return (
    <>
        <link href={cssFile} rel="stylesheet" />
        <img src={boatImage} />
    </>
  )
}

export default Exemplo08Images
