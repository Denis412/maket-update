import React from 'react';
import LanguageItem from "../LanguageItem/LanguageItem";

import classes from "../../assets/styles/MainStyles.module.css";
const LanguagesList = ({languagesList, activeLanguage, setActiveLanguage}) => {
    const handleClickLanguageItem = (languageID) => {
        setActiveLanguage(languageID);
    }

    return (
        <ul className={classes.languagesList}>
            {languagesList.map(language =>
                <LanguageItem
                    key={language.id}
                    id={language.id}
                    title={language.title}
                    activeLanguage={activeLanguage}
                    onClick={handleClickLanguageItem}
                />
            )}
        </ul>
    );
};

export default LanguagesList;