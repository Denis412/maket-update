import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css"

const IconButton = ({srcImg}) => {
    return (
        <button className={classes.iconButton}>
            <img src={srcImg} alt=""/>
        </button>
    );
};

export default IconButton;