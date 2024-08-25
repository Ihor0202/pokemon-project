import {IPokemon} from "../model/IPokemon";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonService} from "../servisce/api.service";
import {AxiosError} from "axios";

type PokemonSliceType = {
    pokemon: IPokemon[]
    isLoaded: boolean
}

const pokemonInitState: PokemonSliceType = {
    pokemon: [],
    isLoaded: false
}
const loadPokemons = createAsyncThunk(
    'pokemonSlice/loadPokemons',
    async (offset:number, thunkAPI) => {
        try {
            const pokemon = await pokemonService.getAll(+offset)
            return thunkAPI.fulfillWithValue(pokemon.results)
        } catch (e) {
            let error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    })
export const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState: pokemonInitState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadPokemons.fulfilled, (state,action) => {
            state.pokemon = action.payload
        })

})

export const pokemonActions = {
    ...pokemonSlice.actions,
    loadPokemons,
}