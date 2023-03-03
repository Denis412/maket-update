import React, {useState} from 'react';

import classes from "../../assets/styles/MainStyles.module.css";
import CustomButton from "../CustomButton/CustomButton";

import arrowImg from "../../assets/images/icon.svg";
const InformationText = ({ text, visibleButton, ...rest }) => {
    const [visibleAllText, setVisibleAllText] = useState(false);
    const handlerClick = () => {
        setVisibleAllText(prev => !prev);
    }

    return (
        <section {...rest} className={classes.informationTextWrapper}>
            <div style={{maxHeight: visibleAllText ? 'max-content' : '10rem', overflowY: 'hidden'}}>{text}</div>
            {visibleButton
                && <CustomButton
                    classNames={[classes.noneBackgroundButton, classes.showAllButton].join(' ')}
                    text="Читать далее"
                    srcImg={arrowImg}
                    firstImg={true}
                    onClick={handlerClick}
                />}
        </section>
    );
};

export default InformationText;