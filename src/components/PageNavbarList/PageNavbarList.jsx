import React from 'react';
import NavbarPageElement from "../NavbarPageElement/NavbarPageElement";

import classes from "../../assets/styles/MainStyles.module.css";
const PageNavbarList = ({ navbarList, activeElement, setActiveElement }) => {
    return (
        <ul className={classes.navbarPageList}>
            {navbarList.map((navbarElement) => (
                <NavbarPageElement
                    key={navbarElement.id}
                    id={navbarElement.id}
                    title={navbarElement.title}
                    activeElement={activeElement}
                    onClick={setActiveElement}
                />
            ))}
        </ul>
    );
};

export default PageNavbarList;