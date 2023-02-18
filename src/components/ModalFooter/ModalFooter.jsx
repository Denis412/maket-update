import React from 'react';

import CustomButton from "../CustomButton/CustomButton";

import classes from "../../assets/styles/MainStyles.module.css";

import goSideImg from "../../assets/images/goside.svg";

const ModalFooter = () => {
    return (
        <div className={classes.modalFooter}>
            <div className={classes.informationText}>
                <p>Нажимая “отправить”,
                    вы даете согласие на <a className={classes.informationLink} href="#">обработку персональных данных </a>
                    и соглашаетесь с нашей <a className={classes.informationLink} href="#">политикой конфиденциальности</a></p>
            </div>
            <div className={classes.modalFormButtons}>
                <CustomButton
                    classNames={[classes.redButton, classes.redButtonModal,
                        classes.redButtonRadius16].join(' ')}
                    text="ОТПРАВИТЬ"
                    srcImg={goSideImg}
                    firstImg={false}
                />
            </div>
        </div>
    );
};

export default ModalFooter;