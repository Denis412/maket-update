import React from 'react';
import classes from "../../assets/styles/MainStyles.module.css";
import PagesList from "../PagesList/PagesList";

const SidebarContent = ({pagesList, activeItem, setActiveItem}) => {
    return (
        <section className={classes.sidebarContent}>
            <PagesList
                pagesList={pagesList}
                activeItem={activeItem}
                setActivePageItem={setActiveItem}
            />
        </section>
    );
};

export default SidebarContent;