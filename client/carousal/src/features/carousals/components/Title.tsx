import React from 'react';
interface Props{
    title:string
}
const Title = (props:Props) => {
    return (
        <div className="title-text">
            {props.title}
        </div>
    );
};

export default Title;