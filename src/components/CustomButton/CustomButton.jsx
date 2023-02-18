import React from 'react';
import ButtonContent from "../ButtonContent/ButtonContent";

const CustomButton = ({classNames, text, srcImg, firstImg}) => {
    return (
        <button
            className={classNames}
            onClick={(e) => e.preventDefault()}
        >
            <ButtonContent text={text} srcImg={srcImg} firstImg={firstImg}/>
        </button>
    );
};

export default CustomButton;