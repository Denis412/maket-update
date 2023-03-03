import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css"
const Blackout = ({ setHide }) => {
    return (
        <div className={classes.blackout} onClick={() => setHide(true)}>
        </div>
    );
};

export default Blackout;