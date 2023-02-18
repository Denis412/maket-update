import React from 'react';
import IconButton from "../IconButton/IconButton";

import classes from "../../assets/styles/MainStyles.module.css"
const CardAppliances = ({title, srcIcon}) => {
    return (
        <div className={classes.cardAppliance}>
            <span>{title}</span>
            <div className={classes.cardApplianceIconWrapper}>
                <IconButton srcImg={srcIcon} />
            </div>
        </div>
    );
};

export default CardAppliances;