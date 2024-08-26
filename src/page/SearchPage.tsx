import React from 'react';
import SearchComponent from "../component/SearchComponent/SearchComponent";
import {useAppDispatch, useAppSelector} from "../store/store";
import {searchPokemonActions} from "../slice/searchPokemonSlice";
import SearchForm from "../component/SearchComponent/SearchForm";

const SearchPage = () => {
    const dispatch = useAppDispatch();
    const { searchPokemon } = useAppSelector(state => state.searchPokemonSlice);
    console.log(searchPokemon)


    const handleSearch = (query: string) => {
        dispatch(searchPokemonActions.loadSearchPokemon(query));
    };

    return (
        <div>
            <SearchForm onSearch={handleSearch}/>
            <SearchComponent searchPokemon={searchPokemon}/>
        </div>
    );
};

export default SearchPage;