import React from "react";

import classes from "../../assets/styles/MainStyles.module.css";
const NavbarPageElement = ({ id, title, activeElement, onClick }) => {
  return (
      <div
          className={activeElement === id
              ? [classes.pageNavbarElement, classes.pageNavbarElementActive].join(' ')
              : classes.pageNavbarElement}
          onClick={() => onClick(id)}
      >
        <span className={classes.navbarText}>{title}</span>
      </div>
  );
};

export default NavbarPageElement;
