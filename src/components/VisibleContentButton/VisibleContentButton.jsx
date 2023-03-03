import React from 'react';
import buttonContent from "../ButtonContent/ButtonContent";
import ButtonContent from "../ButtonContent/ButtonContent";

const VisibleContentButton = ({ classNames, text, srcImg, firstImg }) => {
    return (
        <button className={classNames}>
            <ButtonContent text={text} srcImg={srcImg} firstImg={firstImg}/>
        </button>
    );
};

export default VisibleContentButton;