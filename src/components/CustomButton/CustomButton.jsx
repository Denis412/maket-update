import React from 'react';
import ButtonContent from "../ButtonContent/ButtonContent";
import VisibleContentButton from "../VisibleContentButton/VisibleContentButton";

const CustomButton = ({classNames, text, srcImg, firstImg, visibleContent, onClick, ...rest}) => {

    const handlerClick = (e) => {
        e.preventDefault();
        onClick();
    }

    return (
        <button
            {...rest}
            className={classNames}
            onClick={(e) => handlerClick(e)}
        >
            <ButtonContent text={text} srcImg={srcImg} firstImg={firstImg}/>
        </button>
    );
};

export default CustomButton;