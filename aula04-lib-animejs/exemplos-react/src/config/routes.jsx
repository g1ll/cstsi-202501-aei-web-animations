import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "../App";

import Exemplo01Animation from "../pages/Exemplo01Intro/Exemplo01Intro";

export const pages = [
    {path:"exemplo-01-simples",  title: 'Introdução a Biblioteca', el: <Exemplo01Animation/>},
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