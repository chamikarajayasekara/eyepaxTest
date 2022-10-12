import React from 'react';

interface Props{
    subTitle:string
}
const SubTitle = (props:Props) => {
    return (
        <div>
            {props.subTitle}
        </div>
    );
};

export default SubTitle;