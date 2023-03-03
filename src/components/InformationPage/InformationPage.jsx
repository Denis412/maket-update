import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css";
import ImageWrapper from "../ImageWrapper/ImageWrapper";

import mainImg from "../../assets/images/_MG_3223.png";
import InformationText from "../InformationText/InformationText";
const InformationPage = () => {
    return (
        <section className={classes.pageInformationWrapper}>
            <InformationText text={
                <>
                    <p>Мы являемся авторизованным сервисным центром по ремонту техники Dell.
                        Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.</p>
                    <p>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера,
                        что подтверждает большое количество постоянных клиентов.
                        Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.</p>
                </>
            } visibleButton={true}/>
            <ImageWrapper srcImg={mainImg}/>
        </section>
    );
};

export default InformationPage;