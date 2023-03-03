import React, {useMemo} from 'react';
import CustomButton from "../CustomButton/CustomButton";

import classes from "../../assets/styles/MainStyles.module.css";

import goSideImg from "../../assets/images/goside.svg"

const TablePriceItem = ({ id, title, price, term }) => {
    const widthColumns = useMemo(() => {
        console.log(100 / 4);
        return 100 / 4;
    }, [title]);
    return (
        <div className={classes.tablePriceItem}>
            <div style={{width: '45%', flexGrow: "1"}}>{title}</div>
            <div style={{width: '20%', flexGrow: "2"}}>{price}</div>
            <div style={{width: '20%', flexGrow: "3"}}>{term}</div>
            <CustomButton
                style={{width: "7.5rem", maxWidth: "7.5rem", height: "2rem", flexGrow: "4"}}
                classNames={[classes.redButton, classes.redButtonRadius16].join(' ')}
                text="ЗАКАЗАТЬ"
                srcImg={goSideImg}
                firstImg={false}
            />
        </div>
    );
};

export default TablePriceItem;