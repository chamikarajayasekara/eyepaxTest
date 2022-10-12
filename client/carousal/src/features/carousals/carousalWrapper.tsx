import React, {useEffect} from 'react';

import Carousal from "./components/Carousal";

const CarousalWrapper = () => {

    return (
        <div>
            <Carousal slides={1} infinite={false}/>
            <Carousal slides={4} infinite={true}/>
            <Carousal slides={10} infinite={false}/>
        </div>
    );
};

export default CarousalWrapper;