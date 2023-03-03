import React from 'react';
import classes from "../../assets/styles/MainStyles.module.css";
import TableTitleItem from "../TableTitleItem/TableTitleItem";

const TableHeader = ({ titles }) => {
    return (
        <section className={classes.headerTableWrapper}>
            {titles.map(title =>
                <TableTitleItem
                    key={title.id}
                    id={title.id}
                    title={title.title}
                />
            )}
        </section>
    );
};

export default TableHeader;