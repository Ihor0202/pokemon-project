import React, {FC} from 'react';
import {IPokemon} from "../../model/IPokemon";
import styles from "./PokemonComponent.module.css";
import {Link} from "react-router-dom";



type IProps = {
    pokemon: IPokemon[]
    // urlId: string[]

}
const PokemonComponent:FC<IProps> = ({pokemon}) => {


    const extractPokemonId = (url: string) => {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 2];
    };
    return (
        <div className={styles.pokemonPage}>
            {pokemon.map(pok => {
                const pokemonId = extractPokemonId(pok.url);
                // console.log(pokemonId)
                const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

                return (
                    <div key={pok.url} className={styles.pokemonPage__card}>
                        <Link to={'/pokemon/'+pokemonId}> <img src={imgUrl} alt={pok.name} className={styles.pokemonPage__image}/>
                            <p className={styles.pokemonPage__name}>{pok.name}</p></Link>
                    </div>
                );
            })}
        </div>
    );
};

export default PokemonComponent;