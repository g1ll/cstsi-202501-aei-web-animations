import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "../App";

import Exemplo01Animation from "../pages/Exemplo01Animation/Exemplo01Animation";
import Exemplo02Shortened from "../pages/Exemplo02Shortened/Exemplo02Shortened";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/exemplo-01-animation" element={<Exemplo01Animation />} />
            <Route path="/exemplo-02-abreviado" element={<Exemplo02Shortened />} />
        </>
    )
);

export default routes;