import React, {FC} from 'react';
import {IFormPokemon} from "../../model/IFormPokemon";

type IProps = {
    form: IFormPokemon
    // url: string
}
const FormComponent: FC<IProps> = ({form}) => {


    return (
        <div>
            <div>
                 <h3>nameType: {form.types?.map((typ,i) => <span key={i}>
                     {typ.type?.name}</span>)}
                 </h3>
                    {/*<img src={img} alt={'img'}/>*/}
                    <img src={form.sprites?.front_shiny} alt={'img'}/>
                    <img src={form.sprites?.back_default} alt={'img'}/>
                    <img src={form.sprites?.back_shiny} alt={'img'}/>
            </div>
            <div>
                <h4>id: {form.id}</h4>
                <ul>form names: {form.form_names?.map((formName,i) => <li key={i}>{formName.name}</li>)}</ul>
                <h5>slot: {form.types?.map((typ,i) => <span key={i}>{typ.slot}</span>)}</h5>
            </div>

        </div>
    );
};

export default FormComponent;