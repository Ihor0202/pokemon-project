import {IFormPokemon} from "../model/IFormPokemon";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonService} from "../servisce/api.service";
import {AxiosError} from "axios";


type FormPokemonSliceType = {
    form: IFormPokemon
}
const formPokemonInitState:FormPokemonSliceType = {
    form: {} as IFormPokemon
}

let loadFormPokemon = createAsyncThunk(
    'formPokemonSlice/loadFormPokemon',
    async (id:number, thunkAPI)=> {
        try {
            const form = await pokemonService.formPokemon(id)
            return thunkAPI.fulfillWithValue(form)
        } catch (e) {
            const error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)
export const formPokemonSlice = createSlice({
    name: 'formPokemonSlice',
    initialState: formPokemonInitState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadFormPokemon.fulfilled, (state, action) => {
            state.form = action.payload
        })
})


export const formPokemonActions = {
    ...formPokemonSlice.actions,
    loadFormPokemon,
}
