
const Exemplo02Shortened = () => {
    return (
        <>
            <style>
                {`
                   .grenal{
                        width: 100vw;
                        height: 100vh;
                        animation: grenal2 1s ease infinite; 
                    }

                    @keyframes grenal1 {
                        0%,100%{ background-color: blue;}
                        50%{ background-color: red;}
                    }

                    @keyframes grenal2 {
                        0%,50%,100% {
                        background-color: white;
                        }
                        25% {
                        background-color: blue;
                        }
                        75%{
                        background-color: red;
                        }
                    }
                `}
            </style>
            <div className='grenal'></div>
        </>)
}

export default Exemplo02Shortened;