import axios from "axios";
import {baseURL, urls} from "../constants/url";
import {IPokemonResult} from "../model/IPokemonResult";
import {IPokemonDetails} from "../model/IPokemonDetails";
import {ISearchPokemon} from "../model/ISearchPokemon";


const axiosInstance = axios.create({
    baseURL: baseURL
    // baseURL: "https://pokeapi.co/api/v2"
})
// https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
export const pokemonService = {
    getAll: async ( offset:number): Promise<IPokemonResult> => {
        const response =
            await axiosInstance.get<IPokemonResult>(urls.pokemonUrl.allPokemon(offset))
        return response.data
    },

    getPokemon: async (id: number): Promise<IPokemonDetails> => {
        const response =
            await axiosInstance.get<IPokemonDetails>(urls.pokemonUrl.pokemonById(id));
        return response.data;
    },
    searchPokemon: async (ability:string): Promise<ISearchPokemon[]> => {
        const response = await axiosInstance.get(urls.pokemonUrl.searchByAbility(ability))
        return response.data.pokemon
    }
// getImg: async (id:number) => {
//     // const response  = await axiosInstance.get(urls.imgUrl.ImgById(id))
//     return await axiosInstance.get(urls.imgUrl.ImgById(id))
//     // return response
// },
}







