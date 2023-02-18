import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css"
import CardAppliances from "../CardAppliances/CardAppliances";
import CardCompany from "../CardCompany/CardCompany";

const Card = ({size, title, srcLogo, srcIcon}) => {
    return (
        <div style={{width: size.width, height: size.height}} className={classes.card}>
            {title
                ? <CardAppliances title={title} srcIcon={srcIcon}/>
                : <CardCompany srcLogo={srcLogo} srcIcon={srcIcon}/>
            }
        </div>
    );
};

export default Card;