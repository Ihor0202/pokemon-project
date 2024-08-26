import React, {FC} from 'react';
import {ISearchPokemon} from "../../model/ISearchPokemon";
import PokemonComponent from "../PokemonComponent/PokemonComponent";

type IProps = {
    searchPokemon: ISearchPokemon[]

}
const SearchComponent: FC<IProps> = ({searchPokemon}) => {


    return (
        <div>
            <PokemonComponent pokemon={searchPokemon.map(pok => pok.pokemon)}/>
        </div>
    );
};

export default SearchComponent;