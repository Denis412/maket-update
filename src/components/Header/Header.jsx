import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css";
import IconButton from "../IconButton/IconButton";

import burgerImg from "../../assets/images/burger1.svg"
import logoImg from "../../assets/images/Group.svg"
import phoneImg from "../../assets/images/chat copy.svg"
import chatImg from "../../assets/images/chat.svg"
import profileImg from "../../assets/images/profile.svg"
import repairImg from "../../assets/images/repair.svg"
import searchImg from "../../assets/images/search.svg"
import IconButtonsList from "../IconButtonsList/IconButtonsList";

const Header = ({ setHide }) => {
    return (
        <header className={classes.header}>
            <IconButton onClick={() => setHide(false)} srcImg={burgerImg}/>
            <div style={{marginLeft: '1.25rem'}} className={classes.headerSplit}></div>
            <div className={classes.headerCenterContent}>
                <img src={logoImg} alt=""/>
                <IconButtonsList iconButtons={[
                    {id: 1, srcImg: phoneImg},
                    {id: 2, srcImg: chatImg},
                    {id: 3, srcImg: profileImg},
                ]}/>

            </div>
            <div style={{marginRight: '1.25rem'}} className={classes.headerSplit}></div>
            <IconButtonsList iconButtons={[
                {id: 1, srcImg: repairImg},
                {id: 2, srcImg: searchImg},
            ]}/>
        </header>
    );
};

export default Header;