
// Головний інтерфейс для даних покемона
import {IAbility} from "./IAbility";
import {IStat} from "./IStat";
import {IType} from "./IType";
import {IImage} from "./IImage";
import {IForm} from "./IForm";

export interface IPokemonDetails {
    id: number;
    name: string;
    abilities: IAbility[];
    stats: IStat[];
    types: IType[];
    sprites: IImage;
    forms: IForm[];
}