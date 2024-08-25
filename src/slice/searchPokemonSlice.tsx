import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonService} from "../servisce/api.service";
import {AxiosError} from "axios";
import {ISearchPokemon} from "../model/ISearchPokemon";

type PokemonDetSliceType = {
    searchPokemon: ISearchPokemon[]
    isLoaded: boolean
}

const pokemonDetInitState: PokemonDetSliceType = {
    searchPokemon: [],
    isLoaded: false
}
const loadSearchPokemon = createAsyncThunk(
    'searchPokemonSlice/loadSearchPokemon',
    async (search: string, thunkAPI) => {
        try {
            const pokemon = await pokemonService.searchPokemon(search);
            return thunkAPI.fulfillWithValue(pokemon);
        } catch (e) {
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const searchPokemonSlice = createSlice({
    name: 'searchPokemonSlice',
    initialState: pokemonDetInitState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadSearchPokemon.fulfilled, (state,action) => {
            state.searchPokemon = action.payload
        })

})

export const searchPokemonActions = {
    ...searchPokemonSlice.actions,
    loadSearchPokemon,
}