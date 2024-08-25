export const baseURL = 'https://pokeapi.co/api/v2/'
// https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
export const baseImgUrl = 'https://raw.githubusercontent.com/'


export const urls = {
    pokemonUrl: {
        // allPokemon: baseURL + 'pokemon',
        allPokemon: (offset:number): string => baseURL + 'pokemon?limit=20&offset=' + offset ,
        pokemonById: (id: number): string => baseURL + 'pokemon/' + id,
        // search: BaseUrl + '/3/search/movie'
    },
    imgUrl: {
        ImgById: (id: number): string => baseImgUrl + 'PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + id + '.svg',
        // secondImgById: (id: string): string => baseImgUrl + 'PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + id + '.png'
    }
}





