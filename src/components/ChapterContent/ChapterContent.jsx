import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css"
const ChapterContent = ({content}) => {
    return (
        <div className={classes.chapterContent}>
            {content}
        </div>
    );
};

export default ChapterContent;