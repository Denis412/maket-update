import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css"
import Indicator from "../Indicator/Indicator";
const PageItem = ({id, title, link, activeItem, onClick}) => {
    return (
        <div
            className={activeItem === id
                ? [classes.pageItem, classes.pageItemActive].join(' ')
                : classes.pageItem}
            onClick={() => onClick(id)}
        >
            <Indicator
                size={{width: "4px", height: "2rem"}}
                margin="0 1.5rem 0 -1.5rem"
                visible={activeItem === id}
            />
            <a href={link}>
                <span>{title}</span>
            </a>
        </div>
    );
};

export default PageItem;