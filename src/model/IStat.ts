// Інтерфейс для Stat (характеристики)
export interface IStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}