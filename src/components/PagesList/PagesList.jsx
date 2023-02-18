import React from 'react';
import PageItem from "../PageItem/PageItem";

import classes from "../../assets/styles/MainStyles.module.css"

const PagesList = ({pagesList, activeItem, setActivePageItem}) => {
    const handleClickPageItem = (pageID) => {
        setActivePageItem(pageID);
    }

    return (
        <ul className={classes.pagesListWrapper}>
            {pagesList.map(page =>
                <PageItem
                    key={page.id}
                    id={page.id}
                    title={page.title}
                    link={page.link}
                    activeItem={activeItem}
                    onClick={handleClickPageItem}
                />
            )}
        </ul>
    );
};

export default PagesList;