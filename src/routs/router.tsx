import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PokemonPage from "../page/PocemonPage";
import PokemonByIdPage from "../page/PokemonByIdPage";
import FavoritePage from "../page/FavoritePage";
import SearchPage from "../page/SearchPage";
import FormPage from "../page/FormPage";

export const router = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
    children: [
        {path: '/pokemon', element: <PokemonPage/>},
        {path: '/pokemon/:id', element: <PokemonByIdPage/>},
        {path: '/favorite', element: <FavoritePage/>},
        {path: '/search', element: <SearchPage/>},
        {path: '/form/:id', element: <FormPage/>}

    ]}
])