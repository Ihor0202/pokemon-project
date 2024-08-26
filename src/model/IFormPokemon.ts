import {IPokemon} from "./IPokemon";
import {IImage} from "./IImage";
import {IType} from "./IType";
import {IForm_Names} from "./IForm_Names";

export interface IFormPokemon {
    form_name: string,
    form_names: IForm_Names[],
    form_order: number,
    id: number,
    is_battle_only: boolean,
    is_default: boolean,
    is_mega: boolean,
    name: string,
    names: [],
    order: string,
    pokemon: IPokemon,
    sprites: IImage,
    types: IType[],
    // types: IType,
    version_group: IPokemon
}