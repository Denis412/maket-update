import React from 'react';
import Card from "../Card/Card";

import classes from "../../assets/styles/MainStyles.module.css";

const CardsList = ({cardsList}) => {
    return (
        <ul className={classes.cardsList}>
            {cardsList.map(card =>
                <Card
                    key={card.id}
                    size={card.size}
                    title={card.title}
                    srcLogo={card.srcLogo}
                    srcIcon={card.srcIcon}
                />
            )}
        </ul>
    );
};

export default CardsList;