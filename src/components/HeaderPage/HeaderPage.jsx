import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css";
import CustomButton from "../CustomButton/CustomButton";

import repairImg from "../../assets/images/repair.svg";
import checkStatusImg from "../../assets/images/checkstatus.svg";
import Indicator from "../Indicator/Indicator";
import MediaQuery from "react-responsive";

const HeaderPage = ({ title }) => {
    return (
    <section className={classes.headerPageWrapper}>
        <span className={classes.boldText}>
            <Indicator size={{width: "3px", height: "2.5rem"}} margin="0 2rem 0 -2rem" visible={true}/>
            {title}
        </span>
        <MediaQuery minWidth={769}>
            <div>
                <CustomButton classNames={classes.noneBackgroundButton} text="Оставить заявку" srcImg={repairImg} firstImg={false}/>
                <CustomButton classNames={classes.noneBackgroundButton} text="Статус ремонта" srcImg={checkStatusImg} firstImg={false}/>
            </div>
        </MediaQuery>
    </section>
    );
};

export default HeaderPage;