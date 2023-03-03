import React from 'react';
import classes from "../../assets/styles/MainStyles.module.css";
import TablePriceItem from "../TablePriceItem/TablePriceItem";

const TableContent = ({ content }) => {
    return (
        <div className={classes.tableContentWrapper}>
            {content.map(item =>
                <TablePriceItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    term={item.term}
                    price={item.price}
                />
            )}
        </div>
    );
};

export default TableContent;