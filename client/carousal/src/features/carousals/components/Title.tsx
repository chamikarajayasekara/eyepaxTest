import React from 'react';
interface Props{
    title:string
}
const Title = (props:Props) => {
    return (
        <div>
            {props.title}
        </div>
    );
};

export default Title;