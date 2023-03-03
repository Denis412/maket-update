import React from 'react';
import modalFooter from "../ModalFooter/ModalFooter";

import classes from "../../assets/styles/MainStyles.module.css";
const PageFooter = () => {
    return (
        <footer className={classes.footerPageWrapper}>
            <a>© 2019 CPS<br/>Разработано командой Apesong</a>
            <a>Политика конфиденциальности</a>
            <a>Информация, размещенная на данной странице, не является публичной офертой</a>
        </footer>
    );
};

export default PageFooter;