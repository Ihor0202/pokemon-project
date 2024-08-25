// Інтерфейс для фото покемона (Image)
export interface IImage {
    front_default: string;
    back_default: string

    back_shiny: string

    front_shiny: string

    other: {
        dream_world: {
            front_default: string;
        };
        "official-artwork": {
            front_default: string;
        };
    };
}
