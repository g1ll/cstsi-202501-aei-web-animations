import React from 'react'

const Exemplo03Percentages = () => {
  return (
    <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#0f0',
        animation: 'rave 1s infinite',
    }}>
    <style>
        {`@keyframes rave {
                0%,100%{ background-color: blue;}
                25%{ background-color: red;}
                50%{ background-color: green;}
                75%{ background-color: yellow;}
            }`}
    </style>
    </div>
  )
}

export default Exemplo03Percentages
