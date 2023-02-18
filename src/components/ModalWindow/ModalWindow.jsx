import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css";
import Indicator from "../Indicator/Indicator";

const ModalWindow = ({title, content, side}) => {
    return (
        <section
            className={side === "left"
                ? [classes.modalWrapper, classes.modalWrapperLeftSide].join(' ')
                : [classes.modalWrapper, classes.modalWrapperRightSide].join(' ')}
        >
            <div className={classes.modalContentWrapper}>
                <div className={classes.modalHeaderWrapper}>
                    <Indicator
                        size={{width: "4px", height: "40px"}}
                        margin="0 1.75rem 0 -2rem"
                        visible={true}
                    />
                    <span className={classes.modalHeaderText}>{title}</span>
                </div>
                {content}
            </div>
        </section>
    );
};

export default ModalWindow;