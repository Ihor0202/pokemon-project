import {configureStore} from "@reduxjs/toolkit";
import {pokemonSlice} from "../slice/pokemonSlice";
import {useDispatch, useSelector} from "react-redux";
import {pokemonInfoSlice} from "../slice/pokemonInfoSlice";




export const store = configureStore({
    reducer: {
        pokemonSlice: pokemonSlice.reducer,
        pokemonInfoSlice: pokemonInfoSlice.reducer
    }
})



export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()