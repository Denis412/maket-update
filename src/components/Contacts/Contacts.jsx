import React from 'react';

import classes from "../../assets/styles/MainStyles.module.css";
const Contacts = ({email, phone}) => {
    return (
        <div className={classes.contactsWrapper}>
            <span className={classes.contactItem}>{email}</span>
            <span className={[classes.contactItem, classes.contactItemPhone].join(' ')}>{phone}</span>
        </div>
    );
};

export default Contacts;