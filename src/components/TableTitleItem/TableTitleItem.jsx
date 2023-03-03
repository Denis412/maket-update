import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css";
const TableTitleItem = ({ id, title }) => {
    return (
        <div style={{width: id === 1 ? '45%' : id === 4 ? '7.5rem' : '20%', maxWidth: id === 4 ? '7.5rem' : '', flexGrow: id}} className={classes.tableHeaderItem}>
            {title}
        </div>
    );
};

export default TableTitleItem;