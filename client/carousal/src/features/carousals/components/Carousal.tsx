import React, {useEffect} from 'react';
import {ICarousals} from "../../../models/ICarousals";
import axios from "axios";

interface Props {
    slides:number,
    infinite:boolean,

}
const Carousal = (props:Props) => {
    const [carousals, setCarousals] = React.useState<ICarousals | any>([])
    const [ activated, setActivated] =  React.useState<any>(0)
    async function getUsers(slides: any) {
        let result = await axios.get(`http://localhost:3600/api/carousel?slides=${slides}`);
        return result
    }

    useEffect(() => {
        getUsers(props.slides).then((res:any) => {
            setCarousals(res.data.slides)
        })
    },[])

    useEffect(() =>{
        console.log(carousals)
    },[carousals])


    function handleActivated(previous: any, current: any) {

    }
    return (
        <div className="carousal">
            {/*<div className="carousal-item">*/}
            {/*    {*/}
            {/*        carousals && carousals.length > 0 ?*/}
            {/*            carousals.map((item : any)=>*/}
            {/*                <>*/}
            {/*                    <button>prev</button>*/}
            {/*                    <button>next</button>*/}
            {/*                    <div className="content-image">*/}
            {/*                        <img src={item.image} alt={item.title}/>*/}
            {/*                    </div>*/}
            {/*                    <hr/>*/}
            {/*                </>*/}

            {/*            )*/}
            {/*            : null*/}
            {/*    }*/}
            {/*</div>*/}

            <div className="slider">
                <div className="slide slide_1">
                    <p> 1 </p>
                </div>
                <div className="slide slide_2">
                    <p> 2 </p>
                </div>
                <div className="slide slide_3">
                    <p> 3 </p>
                </div>
                <div className="slide slide_4">
                    <p> 4 </p>
                </div>
                <div className="slide slide_5">
                    <p> 5 </p>
                </div>

            </div>

            <div className="prev">prev</div>
            <div className="next">next</div>
        </div>
    );
};

export default Carousal;