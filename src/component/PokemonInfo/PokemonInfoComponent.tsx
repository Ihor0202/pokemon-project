import React, {FC} from 'react';
import {IPokemonDetails} from "../../model/IPokemonDetails";
import styles from './PokemonInfo.module.css'
import {Link} from "react-router-dom";


type IProps = {
    pokemon: IPokemonDetails
}
const PokemonInfoComponent:FC<IProps> = ({pokemon}) => {

    console.log(pokemon.forms)
    // console.log(pokemon)
    const extractPokemonId = (url: string) => {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 2];
    };

    return (
        <div>
            <h2>name: {pokemon.name}</h2>
            <div className={styles.boxImg}>
                <img src={pokemon.sprites?.front_default} alt={'img'}/>
                <img src={pokemon.sprites?.back_default} alt={'img'}/>
                <img src={pokemon.sprites?.front_shiny} alt={'img'}/>
                <img src={pokemon.sprites?.back_shiny} alt={'img'}/>
            </div>
            <div className={styles.boxInfo}>
                <div>abilities: <ul>{pokemon.abilities?.map(abi => <li key={abi.ability.url}>{abi.ability.name}</li>)}</ul></div>
                <div>stats: <ul>{pokemon.stats?.map(stat => <li key={stat.stat.url}>{stat.stat.name} {stat.base_stat}</li>)}</ul></div>
                <div>types: <ul>{pokemon.types?.map(typ => <li key={typ.type.url}>type:{typ.type.name}</li>)}</ul></div>
                <div>Forms:
                    <ul>
                        {/*{pokemon.forms?.map(form =>*/}

                        {/*    <li key={form.url}>*/}
                        {/*        <button><Link to={'/form/' +formId }>{form.name}</Link></button>*/}
                        {/*    </li>)}*/}
                        {pokemon.forms?.map(form => {
                            const formId = extractPokemonId(form.url); // Витягуємо ID форми

                            return (
                                <li key={form.url}>
                                    <button>
                                        <Link to={'/form/' + formId}>{form.name}</Link>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PokemonInfoComponent;