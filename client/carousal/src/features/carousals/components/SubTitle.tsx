import React from 'react';

interface Props{
    subTitle:string
}
const SubTitle = (props:Props) => {
    return (
        <div className="subTitle-text">
            {props.subTitle}
        </div>
    );
};

export default SubTitle;