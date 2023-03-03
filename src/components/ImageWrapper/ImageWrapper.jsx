import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css";
const ImageWrapper = ({ srcImg }) => {
    return (
        <div>
            <img className={classes.imageRadius6} src={srcImg} alt=""/>
        </div>
    );
};

export default ImageWrapper;