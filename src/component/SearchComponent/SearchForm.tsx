import {SubmitHandler, useForm} from "react-hook-form";

import styles from './searchForm.module.css'
import {FC} from "react";


type IProps = {
    onSearch: (query: string) => void;
};
type IPokemonAbility = {
    pokemon: string
}
const SearchForm: FC<IProps> = ({onSearch}) => {
    const { handleSubmit,
        register } = useForm<IPokemonAbility>();
const search:SubmitHandler<IPokemonAbility> = (item) => {
    onSearch(item.pokemon)
    console.log(item)
}

    return (
        <div className="search-form">
            <form onSubmit={handleSubmit(search)} className={styles.searchFormContainer}>
                <input type="text" {...register('pokemon')} className={styles.searchFormInput}/>
                <button className={styles.searchFormButton}>Search</button>
            </form>
        </div>
    );
};
export default SearchForm;