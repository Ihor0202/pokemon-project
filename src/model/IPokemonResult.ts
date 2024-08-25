import {IPokemon} from "./IPokemon";

export interface IPokemonResult {
    count:number
    next:string
    previous:null
    results: IPokemon[]
}