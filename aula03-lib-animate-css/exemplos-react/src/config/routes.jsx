import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "../App";

import Exemplo01Animation from "../pages/Exemplo01Simples/Exemplo01Simples";
import Exemplo02AnimeNames from "../pages/Exemplo02AnimeNames/Exemplo02AnimeNames";
import Exemplo03Properties from "../pages/Exemplo03Properties/Exemplo03Properties";
import Exemplo04UtilityClass from "../pages/Exemplo04UtilityClass/Exemplo04UtilityClass";

export const pages = [
    {path:"exemplo-01-simples", title:"Aplicando Animações com Classe", el: <Exemplo01Animation/>},
    {path:"exemplo-02-keyframes", title: "Nomes de Animações Prontas", el:<Exemplo02AnimeNames/>},
    {path:"exemplo-03-custom-properties", title: "Variáveis CSS", el:<Exemplo03Properties/>},
    {path:"exemplo-04-utility-class", title: "Classes Utilitárias", el:<Exemplo04UtilityClass/>},
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