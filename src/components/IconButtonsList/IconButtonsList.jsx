import React from 'react';
import IconButton from "../IconButton/IconButton";

import classes from "../../assets/styles/MainStyles.module.css";
const IconButtonsList = ({iconButtons}) => {
    return (
        <ul className={classes.iconButtonsList}>
            {iconButtons.map(iconButton =>
                <IconButton key={iconButton.id} srcImg={iconButton.srcImg}/>
            )}
        </ul>
    );
};

export default IconButtonsList;