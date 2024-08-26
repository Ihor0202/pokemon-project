import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/store";
import {formPokemonActions} from "../slice/formPokemonSlice";
import FormComponent from "../component/FormComponent/FormComponent";

const FormPage = () => {

    let {id} = useParams()
    console.log(id)

    let dispatch = useAppDispatch()

    let {form} = useAppSelector(state => state.formPokemonSlice)
    console.log(form)
    useEffect(() => {
        if (id) {
            dispatch(formPokemonActions.loadFormPokemon(+id))
        } else {
            console.log('error')
        }
    }, [dispatch, id]);
    return (
        <div>
            FormPage{id}
            <FormComponent form={form}/>
        </div>
    );
};

export default FormPage;