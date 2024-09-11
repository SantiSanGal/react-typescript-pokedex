import { createBrowserRouter } from "react-router-dom";
import { Pokedex } from "../pages/Pokedex";
import { PokeInfo } from "../pages/PokeInfo";
import { CustomRoute } from "./customs/CustomRoute";
import { PageError } from "../pages/PageError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <CustomRoute element={<Pokedex />} />,
    },
    {
        path: '/:idPokemon',
        element: <CustomRoute element={<PokeInfo />} />,
    },
    {
        path: '*',
        element: <PageError />
    }
])