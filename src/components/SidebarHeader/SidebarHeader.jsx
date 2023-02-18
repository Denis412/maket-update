import React from 'react';
import classes from "../../assets/styles/MainStyles.module.css";
import MediaQuery from "react-responsive";
import IconButton from "../IconButton/IconButton";
import closeImg from "../../assets/images/burger.svg";
import logoImg from "../../assets/images/Group.svg";
import searchImg from "../../assets/images/search.svg";

const SidebarHeader = () => {
    return (
        <section className={classes.sidebarHeader}>
            <MediaQuery maxWidth={768}>
                <IconButton srcImg={closeImg}/>
                <img style={{marginLeft: "-3rem"}} src={logoImg} alt=""/>
            </MediaQuery>
            <MediaQuery minWidth={769}>
                <img src={logoImg} alt=""/>
            </MediaQuery>

            <IconButton srcImg={searchImg}/>
        </section>
    );
};

export default SidebarHeader;