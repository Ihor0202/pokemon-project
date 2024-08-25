import React, {useEffect} from 'react';
import SearchComponent from "../component/SearchComponent/SearchComponent";
import {useAppDispatch, useAppSelector} from "../store/store";
import {searchPokemonActions} from "../slice/searchPokemonSlice";

const SearchPage = () => {

    const dispatch = useAppDispatch();
    const { searchPokemon } = useAppSelector(state => state.searchPokemonSlice);
    // const [offset, setOffset] = useState<number>(0)
    console.log(searchPokemon)
    useEffect(() => {
        dispatch(searchPokemonActions.loadSearchPokemon('multitype'))
    }, [dispatch]);

    return (
        <div>
            <SearchComponent searchPokemon={searchPokemon}/>
        </div>
    );
};

export default SearchPage;