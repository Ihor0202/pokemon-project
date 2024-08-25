import React from 'react';
import {useParams} from "react-router-dom";

const FormPage = () => {

    let {id} = useParams()
    console.log(id)
    return (
        <div>
            FormPage{id}
        </div>
    );
};

export default FormPage;