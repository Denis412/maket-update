import React from 'react';
import ChapterContent from "../ChapterContent/ChapterContent";

import classes from "../../assets/styles/MainStyles.module.css"
const ChapterPage = ({title, chapterContent}) => {
    return (
        <section className={classes.chapterWrapper}>
            <div className={classes.chapterHeader}>{title}</div>
            <ChapterContent content={chapterContent}/>
        </section>
    );
};

export default ChapterPage;