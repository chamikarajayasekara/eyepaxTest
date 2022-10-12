import React, {useEffect} from 'react';
import {ICarousals} from "../../../models/ICarousals";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";

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


    function handleActivated(type:string) {
        console.log(carousals.length)
        if(type === "previous"){
            setActivated(activated)
        }else if(type === "next"){
            let current ;
            if(activated < carousals.length){
                current  = activated  +1
            }
            setActivated( current )
        }
    }
    return (

        <Container fluid>
            <Row>
                <Col sm={12}>
                    <div className="carousal">
                        <div className="slider">

                            {
                                carousals && carousals.length > 0 ?
                                    carousals.map((item : any, key:number)=>
                                        <Row>
                                            <Col sm={12}>
                                                <>
                                                    {
                                                        activated === key ?
                                                            <div className="slide slide_1">
                                                                <img src={item.image} alt={item.title}/>
                                                            </div>
                                                            :
                                                            null
                                                    }
                                                </>

                                            </Col>
                                        </Row>


                                    )
                                    : null
                            }


                        </div>
                    </div>
                    <button className="prev" onClick={e => handleActivated('prev')}>prev</button>
                    <button className="next"  onClick={e => handleActivated('next')}>next</button>
                </Col>
            </Row>
        </Container>



    );
};

export default Carousal;