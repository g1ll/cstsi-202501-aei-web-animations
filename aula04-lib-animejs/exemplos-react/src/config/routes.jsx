import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "../App";

import Exemplo01Animation from "../pages/Exemplo01Intro/Exemplo01Intro";
import Exemplo02SeletorUtils from "../pages/Exemplo02SeletorUtils/Exemplo02SeletorUtils";
import Exemplo03SliderImagem from "../pages/Exemplo03SliderImagem/Exemplo03SliderImagem";

export const pages = [
    {path:"exemplo-01-simples",  title: 'Introdução a Biblioteca', el: <Exemplo01Animation/>},
    {path:"exemplo-02-seletor-utils",  title: 'Seletores com o Objeto Utils', el: <Exemplo02SeletorUtils/>},
    {path: 'exemplo-03-slider-imagem', title: 'Slider Imagem', el: <Exemplo03SliderImagem/>},
]

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            {pages.map(({path,el},i)=>{
                return (
                    <Route
                        key={i}
                        path={path}
                        element={el}
                    />
                )
            })}
        </>
    )
);

export default routes;