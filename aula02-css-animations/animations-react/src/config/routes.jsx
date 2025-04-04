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
import Exemplo05ImageSprites from "../pages/Exemplo05ImageSprites/Exemplo05ImageSprites";
import Exemplo06Delays from "../pages/Exemplo06Delays/Exemplo06Delays";
import Exemplo07Hover from "../pages/Exemplo07Hover/Exemplo07Hover";
import Exemplo08Images from "../pages/Exemplo08Images/Exemplo08Images";
import Exemplo09Skeleton from "../pages/Exemplo09Skeleton/Exemplo09Skeleton";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="exemplo-01-animation" element={<Exemplo01Animation />} />
            <Route path="exemplo-02-abreviado" element={<Exemplo02Shortened />} />
            <Route path="exemplo-03-percentages" element={<Exemplo03Percentages />} />
            <Route path="exemplo-04-loader-image" element={<Exemplo04ImageLoader />} />
            <Route path="exemplo-05-imgs-sprites" element={<Exemplo05ImageSprites />} />
            <Route path="exemplo-06-animation-delays" element={<Exemplo06Delays />} />
            <Route path="exemplo-07-delays-hover" element={<Exemplo07Hover />} />
            <Route path="exemplo-08-imgs-hover" element={<Exemplo08Images />} />
            <Route path="exemplo-09-skeleton" element={<Exemplo09Skeleton />} />
        </>
    )
);

export default routes;