import React, {useEffect} from 'react';
import PokemonInfoComponent from "../component/PokemonInfo/PokemonInfoComponent";
import {useAppDispatch, useAppSelector} from "../store/store";
import {pokemonInfoActions} from "../slice/pokemonInfoSlice";
import {useParams} from "react-router-dom";

const PokemonByIdPage = () => {
    let {id} = useParams()
    // console.log(id)

    const dispatch = useAppDispatch();
    const { pokemon } = useAppSelector(state => state.pokemonInfoSlice);

    useEffect(() => {
        if (id) {
            dispatch(pokemonInfoActions.loadPokemonInfo(+id))
        }
    }, [id]);
    return (
        <div>
            <PokemonInfoComponent pokemon={pokemon}/>
        </div>
    );
};

export default PokemonByIdPage;