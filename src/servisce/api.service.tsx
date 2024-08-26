import axios from "axios";
import {baseURL, urls} from "../constants/url";
import {IPokemonResult} from "../model/IPokemonResult";
import {IPokemonDetails} from "../model/IPokemonDetails";
import {ISearchPokemon} from "../model/ISearchPokemon";
import {IFormPokemon} from "../model/IFormPokemon";


const axiosInstance = axios.create({
    baseURL: baseURL
})
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
    },
    formPokemon: async (id:number):Promise<IFormPokemon> => {
        const response = await axiosInstance.get<IFormPokemon>(urls.pokemonUrl.pokemonForms(id))
        return response.data
    }
}







