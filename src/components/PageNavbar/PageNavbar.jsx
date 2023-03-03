import React, {useState} from "react";

import classes from "../../assets/styles/MainStyles.module.css";
import NavbarPageElement from "../NavbarPageElement/NavbarPageElement";
import PageNavbarList from "../PageNavbarList/PageNavbarList";

const PageNavbar = ({ navbarList }) => {
  const [activeNavbarElement, setActiveNavbarElement] = useState(1);

  return (
      <div className={classes.navbarPageWrapper}>
        <PageNavbarList
            navbarList={navbarList}
            activeElement={activeNavbarElement}
            setActiveElement={setActiveNavbarElement}
        />
      </div>
  );
};

export default PageNavbar;
