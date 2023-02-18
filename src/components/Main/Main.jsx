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

const Main = () => {
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
            ]}/>
            {/*<ModalWindow title="Отправить заявку" side="right" content={<ModalFeedbackContent />}/>*/}
            {/*<Card size={{width: "15rem", height: "10rem"}} title="Ремонт ноутбуков" srcIcon={iconImg}/>*/}
            {/*<Card size={{width: "15rem", height: "4rem"}} srcLogo={lenovoLogo} srcIcon={iconImg}/>*/}
            {/*  <ChapterPage title="РЕМОНТ РАЗЛИЧНЫХ БРЕНДОВ" chapterContent={*/}
            {/*      <>*/}
            {/*          <CardsList cardsList={[*/}
            {/*              { size: {width: "15rem", height: "10rem"}, title: "Ремонт ноутбуков", srcIcon: iconImg},*/}
            {/*              { size: {width: "15rem", height: "10rem"}, title: "Ремонт ноутбуков", srcIcon: iconImg},*/}
            {/*              { size: {width: "15rem", height: "10rem"}, title: "Ремонт ноутбуков", srcIcon: iconImg},*/}
            {/*              { size: {width: "15rem", height: "10rem"}, title: "Ремонт ноутбуков", srcIcon: iconImg},*/}
            {/*              { size: {width: "15rem", height: "10rem"}, title: "Ремонт ноутбуков", srcIcon: iconImg},*/}
            {/*              { size: {width: "15rem", height: "4rem"}, srcLogo: lenovoLogo, srcIcon: iconImg},*/}
            {/*              { size: {width: "15rem", height: "4rem"}, srcLogo: lenovoLogo, srcIcon: iconImg},*/}
            {/*              // <Card size={{width: "15rem", height: "4rem"}} srcLogo={lenovoLogo} srcIcon={iconImg}/>*/}
            {/*          ]}/>*/}
            {/*          <CustomButton classNames={classes.noneBackgroundButton} text="Показать все" srcImg={icon1Img} firstImg={true}/>*/}
            {/*      </>*/}
            {/*  }/>*/}
        </div>
    );
};

export default Main;