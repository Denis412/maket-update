import React from "react";

import classes from "../../assets/styles/MainStyles.module.css";
import PageNavbar from "../PageNavbar/PageNavbar";
import ChapterPage from "../ChapterPage/ChapterPage";
import CardsList from "../CardsList/CardsList";
import iconImg from "../../assets/images/go.svg";
import CustomButton from "../CustomButton/CustomButton";
import icon1Img from "../../assets/images/icon.svg";
import InformationPage from "../InformationPage/InformationPage";

import lenovoLogo from "../../assets/images/logos/Lenovo.svg";
import samsungLogo from "../../assets/images/logos/Lenovo.svg";
import appleLogo from "../../assets/images/logos/Samsung.svg";
import viewSonicLogo from "../../assets/images/logos/ViewSonic.svg";
import boschLogo from "../../assets/images/logos/Bosch.svg";
import HPLogo from "../../assets/images/logos/HP.svg";
import acerLogo from "../../assets/images/logos/Acer.svg";
import sonyLogo from "../../assets/images/logos/Sony.svg";
import lineImg from "../../assets/images/Line.svg";

import CustomTable from "../CustomTable/CustomTable";
import HeaderPage from "../HeaderPage/HeaderPage";
import InformationText from "../InformationText/InformationText";
import PageFooter from "../PageFooter/PageFooter";
import MediaQuery from "react-responsive";
import Header from "../Header/Header";

const PageContent = ({ setHide }) => {
  return (
    <div className={classes.pageContent}>
        <MediaQuery maxWidth={768}>
            <Header setHide={setHide}/>
        </MediaQuery>
      <HeaderPage title='Услуги и сервисы' />
      <PageNavbar
        navbarList={[
          { id: 1, title: "Ремонтируемые бренды", link: "#" },
          { id: 2, title: "Дополнительные услуги", link: "#" },
          { id: 3, title: "Цены на услуги", link: "#" },
          { id: 4, title: "Адреса сервисных центров", link: "#" },
          { id: 5, title: "Специальные цены", link: "#" },
          { id: 6, title: "Отзывы", link: "#" },
        ]}
      />
      <InformationPage />
      <ChapterPage
        title='РЕМОНТ РАЗЛИЧНЫХ БРЕНДОВ'
        chapterContent={
          <>
            <CardsList
              cardsList={[
                {
                  size: { width: "15rem", height: "4rem" },
                  srcLogo: lenovoLogo,
                  srcIcon: iconImg,
                },
                {
                  size: { width: "15rem", height: "4rem" },
                  srcLogo: samsungLogo,
                  srcIcon: iconImg,
                },
                {
                  size: { width: "15rem", height: "4rem" },
                  srcLogo: appleLogo,
                  srcIcon: iconImg,
                },
                {
                  size: { width: "15rem", height: "4rem" },
                  srcLogo: viewSonicLogo,
                  srcIcon: iconImg,
                },
                {
                  size: { width: "15rem", height: "4rem" },
                  srcLogo: boschLogo,
                  srcIcon: iconImg,
                },
                {
                  size: { width: "15rem", height: "4rem" },
                  srcLogo: HPLogo,
                  srcIcon: iconImg,
                },
                {
                  size: { width: "15rem", height: "4rem" },
                  srcLogo: acerLogo,
                  srcIcon: iconImg,
                },
                {
                  size: { width: "15rem", height: "4rem" },
                  srcLogo: sonyLogo,
                  srcIcon: iconImg,
                },
              ]}
            />
            <CustomButton
              classNames={classes.noneBackgroundButton}
              text='Показать все'
              srcImg={icon1Img}
              firstImg={true}
            />
          </>
        }
      />
      <ChapterPage
        title='РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ'
        chapterContent={
          <>
            <CardsList
              cardsList={[
                {
                  size: { width: "15rem", height: "10rem" },
                  title: "Ремонт ноутбуков",
                  srcIcon: iconImg,
                },
                {
                  size: { width: "15rem", height: "10rem" },
                  title: "Ремонт планшетов",
                  srcIcon: iconImg,
                },
                {
                  size: { width: "15rem", height: "10rem" },
                  title: "Ремонт ПК",
                  srcIcon: iconImg,
                },
                {
                  size: { width: "15rem", height: "10rem" },
                  title: "Ремонт мониторов",
                  srcIcon: iconImg,
                },
              ]}
            />
            <CustomButton
              classNames={classes.noneBackgroundButton}
              text='Показать все'
              srcImg={icon1Img}
              firstImg={true}
            />
          </>
        }
      />
      <ChapterPage
        title='ЦЕНЫ НА УСЛУГИ'
        chapterContent={
          <>
            <CustomTable
              titlesColumns={[
                { id: 1, title: "Ремонтные услуги" },
                { id: 2, title: "Цена" },
                { id: 3, title: "Срок" },
                { id: 4, title: "" },
              ]}
              tableContent={[
                { id: 1, title: "Диагностика", price: "Бесплатно", term: "30" },
                {
                  id: 2,
                  title: "Замена дисплея",
                  price: "1000 ₽",
                  term: "30-120",
                },
                {
                  id: 3,
                  title: "Замена полифонического динамика",
                  price: "1000 ₽",
                  term: "30-120",
                },
                {
                  id: 4,
                  title: "Тестирование с выдачей технического заключения",
                  price: "1000 ₽",
                  term: "30-120",
                },
                {
                  id: 5,
                  title: "Замена программного обеспечения",
                  price: "1000 ₽",
                  term: "30-120",
                },
              ]}
            />
            <InformationText
              style={{ marginBottom: "1rem", maxWidth: "26.25rem" }}
              text='Все цены указаны с учетом НДС.
                                            Стоимость ремонта указана на единичную услугу.
                                            Для получения коммерческого предложения на постоянное
                                            обслуживание, оставьте заявку.'
            />
            <CustomButton
              classNames={classes.noneBackgroundButton}
              text='Получить коммерческое предложение'
              srcImg={lineImg}
              firstImg={false}
            />
          </>
        }
      />
      <PageFooter />
    </div>
  );
};

export default PageContent;
