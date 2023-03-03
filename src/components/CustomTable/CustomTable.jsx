import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css";
import TableHeader from "../TableHeader/TableHeader";
import TableContent from "../TableContent/TableContent";

const CustomTable = ({ titlesColumns, tableContent }) => {
    return (
        <section className={classes.tableWrapper}>
            <TableHeader titles={titlesColumns}/>
            <TableContent content={tableContent}/>
        </section>
    );
};

export default CustomTable;