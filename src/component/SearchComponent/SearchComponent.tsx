import React, {FC} from 'react';
import {ISearchPokemon} from "../../model/ISearchPokemon";
import PokemonComponent from "../PokemonComponent/PokemonComponent";

type IProps = {
    searchPokemon: ISearchPokemon[]

}
const SearchComponent: FC<IProps> = ({searchPokemon}) => {

    // const dispatch = useAppDispatch();
    // const { searchPokemon } = useAppSelector(state => state.searchPokemonSlice);
    // // const [offset, setOffset] = useState<number>(0)
    // console.log(searchPokemon)
    // useEffect(() => {
    //     dispatch(searchPokemonActions.loadSearchPokemon('levitate'))
    // }, [dispatch]);
    // const extractPokemonId = (url: string) => {
    //     const urlParts = url.split('/');
    //     return urlParts[urlParts.length - 2];
    // };


    return (
        <div>
            {/*/!*{searchPokemon.map(pok => <div>{pok.pokemon.name}</div>)}*!/*/}
            {/*{searchPokemon.map(pok => {*/}
            {/*    const pokemonId = extractPokemonId(pok.pokemon.url);*/}
            {/*    // console.log(pokemonId)*/}
            {/*    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;*/}

            {/*    return (*/}
            {/*        <div key={pok.pokemon.url} className={styles.pokemonPage__card}>*/}
            {/*            <Link to={'/pokemon/'+pokemonId}> <img src={imgUrl} alt={pok.pokemon.name} className={styles.pokemonPage__image}/>*/}
            {/*                <p className={styles.pokemonPage__name}>{pok.pokemon.name}</p></Link>*/}
            {/*        </div>*/}
            {/*    );*/}
            {/*})}*/}

            <PokemonComponent pokemon={searchPokemon.map(pok => pok.pokemon)}
                              // urlId={searchPokemon.map(pok => pok.pokemon.url.toString())}
            />

        </div>
    );
};

export default SearchComponent;