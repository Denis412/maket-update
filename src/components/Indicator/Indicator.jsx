import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css"
const Indicator = ({size, margin, visible}) => {
    return (
        !visible
            ? null
            : (
                <div
                    style={{width: size.width, height: size.height, margin: margin}}
                    className={classes.indicator}
                >
                </div>
            )
    );
};

export default Indicator;