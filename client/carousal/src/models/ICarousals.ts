export interface ICarousals{
    image:string,
    title:string,
    subTitle:string
}

export type CarousalContextType = {
    carousals: ICarousals[];
}