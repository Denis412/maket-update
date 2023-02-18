import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css"
import IconButton from "../IconButton/IconButton";

const CardCompany = ({srcLogo, srcIcon}) => {
    return (
        <div className={classes.cardCompany}>
            <img src={srcLogo} alt=""/>
            <IconButton srcImg={srcIcon}/>
        </div>
    );
};

export default CardCompany;