import * as React from "react";
import {CarousalContextType, ICarousals} from "../models/ICarousals";
import {useEffect} from "react";
import axios from "axios";


export const CarousalContext =  React.createContext<CarousalContextType | null>( null);
interface Props {
    children: React.ReactNode
}
const CarousalProvider: React.FC<Props> = ({ children }) => {
    const [carousals, setCarousals] = React.useState<ICarousals | any>([])

    async function getUsers(slides: any) {
        let result = await axios.get(`http://localhost:3600/api/carousel?slides=${slides}`);
        return result
    }

    useEffect(() => {
        getUsers(4).then((res:any) => {
            setCarousals(res.data.slides)
        })
    },[])
    return <CarousalContext.Provider value={carousals}>{children}</CarousalContext.Provider>
}

export  default  CarousalProvider;