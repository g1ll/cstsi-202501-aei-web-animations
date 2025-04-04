import React from 'react'
import {GlobalStyles, SpriteDiv, SpriteImg} from './Exemplo05ImageSprites.styled';

const Exemplo05ImageSprites = () => {
  return (
    <>  
        <GlobalStyles/>
        <SpriteDiv/>
        <SpriteImg
            src="https://i.ibb.co/rdb23sk/goblin-big.png"
            alt="Globin"
            width={'160px'}
            height={'180px'}
            />
    </>
  )
}

export default Exemplo05ImageSprites