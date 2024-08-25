import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../store/store";
import {pokemonActions} from "../slice/pokemonSlice";
import styles from './pokemonPage.module.css'
import PokemonComponent from "../component/PokemonComponent/PokemonComponent";


const PokemonPage = () => {
    const dispatch = useAppDispatch();
    const { pokemon } = useAppSelector(state => state.pokemonSlice);
    const [offset, setOffset] = useState<number>(0)

    useEffect(() => {
        dispatch(pokemonActions.loadPokemons(offset || 0))
    }, [dispatch, offset]);
    console.log(pokemon)

    const handleNextPage = () => {
            setOffset(prevPage => prevPage + 1);

        // setOffset(prevPage => prevPage + 1);
    };
    const handlePrevPage = () => {
        if (offset)  setOffset(prevPage => prevPage - 1);

    };
    console.log(offset)
    return (
        // <div className={styles.pokemonPage}>
        <div className={styles.pokemonContainer}>

            <div><PokemonComponent pokemon={pokemon}/></div>
            <div className={styles.pagination}>
                <button className={styles.btn}
                        disabled={offset < 20}
                        onClick={() => {
                    setOffset(off => off - 20)
                }}>prev
                </button>
                <button className={styles.btn}
                        disabled={offset > 1300}

                        onClick={() => {
                    setOffset(off => off + 20)
                }}>next
                </button>
            </div>
        </div>
    );
};

export default PokemonPage;