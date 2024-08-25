export const baseURL = 'https://pokeapi.co/api/v2/'
// https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
export const baseImgUrl = 'https://raw.githubusercontent.com/'


export const urls = {
    pokemonUrl: {
        // allPokemon: baseURL + 'pokemon',
        allPokemon: (offset:number): string => baseURL + 'pokemon?limit=20&offset=' + offset ,
        pokemonById: (id: number): string => baseURL + 'pokemon/' + id,
        searchByAbility: (search: string): string => baseURL + 'ability/' + search,
        pokemonForms: (id: number): string => baseURL + 'pokemon-form/'+ id
    //     https://pokeapi.co/api/v2/pokemon-form/110/
    //     /ability/levitate
    },

    imgUrl: {
        ImgById: (id: number): string => baseImgUrl + 'PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + id + '.svg',
    }
}





