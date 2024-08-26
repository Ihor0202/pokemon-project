export const baseURL = 'https://pokeapi.co/api/v2/'

export const urls = {
    pokemonUrl: {
        allPokemon: (offset:number): string => baseURL + 'pokemon?limit=20&offset=' + offset ,
        pokemonById: (id: number): string => baseURL + 'pokemon/' + id,
        searchByAbility: (search: string): string => baseURL + 'ability/' + search,
        pokemonForms: (id: number): string => baseURL + 'pokemon-form/'+ id

    },
}





