import React from 'react';
import classes from "../../assets/styles/MainStyles.module.css";

const ButtonContent = ({text, srcImg, firstImg}) => {
    return (
        <div className={classes.buttonContent}>
            {firstImg
                ? (
                    <>
                        <img src={srcImg} alt=""/>
                        <span className={[classes.buttonText, classes.buttonTextRight].join(' ')}>{text}</span>
                    </>
                )
                : (
                    <>
                        <span className={[classes.buttonText, classes.buttonTextLeft].join(' ')}>{text}</span>
                        <img src={srcImg} alt=""/>
                    </>
                )}
        </div>
    );
};

export default ButtonContent;