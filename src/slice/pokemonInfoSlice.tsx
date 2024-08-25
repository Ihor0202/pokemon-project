import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonService} from "../servisce/api.service";
import {AxiosError} from "axios";
import {IPokemonDetails} from "../model/IPokemonDetails";

type PokemonDetSliceType = {
    pokemon: IPokemonDetails
    isLoaded: boolean
}

const pokemonDetInitState: PokemonDetSliceType = {
    pokemon: {} as IPokemonDetails,
    isLoaded: false
}
const loadPokemonInfo = createAsyncThunk(
    'pokemonInfoSlice/loadPokemonInfo',
    async (id: number, thunkAPI) => {
        try {
            const pokemon = await pokemonService.getPokemon(id);
            return thunkAPI.fulfillWithValue(pokemon);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const pokemonInfoSlice = createSlice({
    name: 'pokemonInfoSlice',
    initialState: pokemonDetInitState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadPokemonInfo.fulfilled, (state,action) => {
            state.pokemon = action.payload
        })

})

export const pokemonInfoActions = {
    ...pokemonInfoSlice.actions,
    loadPokemonInfo,
}