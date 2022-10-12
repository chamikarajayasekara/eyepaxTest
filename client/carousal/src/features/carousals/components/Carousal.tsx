import React, {useEffect} from 'react';
import {ICarousals} from "../../../models/ICarousals";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";
import Title from "./Title";
import SubTitle from "./SubTitle";

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



    function handleActivated(type:string) {
        console.log(carousals.length)
        if(type === "prev"){
            console.log(activated)
            if(activated !== 0 ){
                setActivated(activated - 1)
            }

        }else if(type === "next"){
            let current ;
            console.log(carousals.length)
            console.log(activated)
            if(activated < carousals.length - 1){
                current  = activated  + 1
                setActivated( current )
            }

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
                                                <>
                                                    {
                                                        activated === key ?
                                                            <div className="slide">
                                                                <img src={item.image} alt={item.title}/>
                                                                <Title title={item.title}/>
                                                                <SubTitle subTitle={item.subTitle}/>
                                                            </div>
                                                            :
                                                            null
                                                    }
                                                    {
                                                        carousals.length > 1 ? <button className="previousState" onClick={e => handleActivated('prev')}>prev</button> : null
                                                    }
                                                    {
                                                        carousals.length > 1 ?   <button className="next"  onClick={e => handleActivated('next')}>next</button>: null
                                                    }
                                                </>

                                    )
                                    : null
                            }
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>



    );
};

export default Carousal;