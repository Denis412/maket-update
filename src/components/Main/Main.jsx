import React, {useState} from 'react';

// import ModalWindow from "../../components/ModalWindow/ModalWindow";
// import ModalFeedbackContent from "../../components/ModalFeedbackContent/ModalFeedbackContent";
// import ModalCallContent from "../../components/ModalCallContent/ModalCallContent";
// import Card from "../../components/Card/Card";
// import CardCompany from "../../components/CardCompany/CardCompany";
//
import classes from "../../assets/styles/MainStyles.module.css"
//
import lenovoLogo from "../../assets/images/logos/Acer.svg"
import iconImg from "../../assets/images/go.svg"
import icon1Img from "../../assets/images/icon.svg"
// import CardAppliances from "../../components/CardAppliances/CardAppliances";
// import ChapterPage from "../../components/ChapterPage/ChapterPage";
// import CardsList from "../../components/CardsList/CardsList";
// import CustomButton from "../../components/CustomButton/CustomButton";
import Sidebar from "../Sidebar/Sidebar";
import ChapterPage from "../ChapterPage/ChapterPage";
import CardsList from "../CardsList/CardsList";
import CustomButton from "../CustomButton/CustomButton";
import ModalFeedbackContent from "../ModalFeedbackContent/ModalFeedbackContent";
import ModalWindow from "../ModalWindow/ModalWindow";
import PageNavbar from "../PageNavbar/PageNavbar";
import PageContent from "../PageContent/PageContent";
import Blackout from "../Blackout/Blackout";
import MediaQuery from "react-responsive";
import Header from "../Header/Header";

const Main = () => {
    const [hideSidebar, setHideSidebar] = useState(true);

    const handlerHiddenSidebar = (hidden) => {
        console.log("gg")
        setHideSidebar(hidden);
    }

    return (
        <div className={classes.mainWrapper}>
            <Sidebar pagesList={[
                {id: 1, title: "Ремонт техники"},
                {id: 2, title: "Услуги и сервисы"},
                {id: 3, title: "Корпоративным клиентам"},
                {id: 4, title: "Продавцам техники"},
                {id: 5, title: "Партнерам"},
                {id: 6, title: "Производителям"},
                {id: 7, title: "Наши сервисные центры"},
                {id: 8, title: "Контакты"},
            ]} hide={hideSidebar} setHide={handlerHiddenSidebar}/>
            <PageContent setHide={handlerHiddenSidebar}/>
            {!hideSidebar
                &&
                <MediaQuery maxWidth={768}>
                    <Blackout setHide={handlerHiddenSidebar}/>
                </MediaQuery>
            }
        </div>
    );
};

export default Main;