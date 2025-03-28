import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "../App";

import Exemplo01Animation from "../pages/Exemplo01Animation/Exemplo01Animation";
import Exemplo02Shortened from "../pages/Exemplo02Shortened/Exemplo02Shortened";
import Exemplo03Percentages from "../pages/Exemplo03Percentages/Exemplo03Percentages";
import Exemplo04ImageLoader from "../pages/Exemplo04ImageLoader/Exemplo04ImageLoader";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="/exemplo-01-animation" element={<Exemplo01Animation />} />
            <Route path="/exemplo-02-abreviado" element={<Exemplo02Shortened />} />
            <Route path="/exemplo-03-percentages" element={<Exemplo03Percentages />} />
            <Route path="exemplo-04-loader-image" element={<Exemplo04ImageLoader />} />
        </>
    )
);

export default routes;