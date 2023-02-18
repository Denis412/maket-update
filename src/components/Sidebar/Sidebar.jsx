import React, {useState} from 'react';

import classes from "../../assets/styles/MainStyles.module.css";

import SidebarHeader from "../SidebarHeader/SidebarHeader";
import SidebarContent from "../SidebarContent/SidebarContent";
import SidebarFooter from "../SidebarFooter/SidebarFooter";
import phoneImg from "../../assets/images/chat copy.svg";
import chatImg from "../../assets/images/chat.svg";
import profileImg from "../../assets/images/profile.svg";

const Sidebar = ({pagesList}) => {
    const [activeItem, setActiveItem] = useState(1);
    const [activeLanguage, setActiveLanguage] = useState(1);

    return (
        <section className={classes.sidebarWrapper}>
            <SidebarHeader />
            <SidebarContent
                pagesList={pagesList}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />
            <SidebarFooter
                iconButtons={[
                    {id: 1, srcImg: phoneImg},
                    {id: 2, srcImg: chatImg},
                    {id: 3, srcImg: profileImg},
                ]}
                languagesList={[
                    {id: 1, title: "RU"},
                    {id: 2, title: "EN"},
                    {id: 3, title: "CH"},
                ]}
                activeLanguage={activeLanguage}
                setActiveLanguage={setActiveLanguage}
            />
        </section>
    );
};

export default Sidebar;