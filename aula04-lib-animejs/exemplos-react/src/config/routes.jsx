import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "../App";

import Exemplo01Animation from "../pages/Exemplo01Intro/Exemplo01Intro";
import Exemplo02SeletorUtils from "../pages/Exemplo02SeletorUtils/Exemplo02SeletorUtils";

export const pages = [
    {path:"exemplo-01-simples",  title: 'Introdução a Biblioteca', el: <Exemplo01Animation/>},
    {path:"exemplo-02-seletor-utils",  title: 'Seletores com o Objeto Utils', el: <Exemplo02SeletorUtils/>},
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