import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css";
const LanguageItem = ({id, title, activeLanguage, onClick}) => {
    return (
        <div
            className={activeLanguage === id
                ? [classes.language, classes.languageActive].join(' ')
                : classes.language}
            onClick={() => onClick(id)}
        >
            {title}
        </div>
    );
};

export default LanguageItem;