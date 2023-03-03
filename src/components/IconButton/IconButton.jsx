import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css"

const IconButton = ({ srcImg, ...rest }) => {
    return (
        <button {...rest} className={classes.iconButton}>
            <img src={srcImg} alt=""/>
        </button>
    );
};

export default IconButton;