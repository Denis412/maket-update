import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css";

import IconButtonsList from "../IconButtonsList/IconButtonsList";
import Contacts from "../Contacts/Contacts";
import LanguagesList from "../LanguagesList/LanguagesList";

const SidebarFooter = ({iconButtons, languagesList, activeLanguage, setActiveLanguage}) => {
    return (
        <section className={classes.sidebarFooter}>
            <IconButtonsList
                iconButtons={iconButtons}
            />
            <Contacts
                email="mail@cps.com"
                phone="8 800 890 8900"
            />
            <LanguagesList
                languagesList={languagesList}
                activeLanguage={activeLanguage}
                setActiveLanguage={setActiveLanguage}
            />
        </section>
    );
};

export default SidebarFooter;