import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css"
import ButtonContent from "../ButtonContent/ButtonContent";
const ChapterContent = ({content}) => {
    return (
        <div className={classes.chapterContent}>
            {content}
            <ButtonContent />
        </div>
    );
};

export default ChapterContent;