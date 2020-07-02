import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { LogOutBtn } from "../../Components/Buttons/LogOut";

const Header = (props) => {
  const buttonClass = ["btn", "btn_aside", "btn-primary"];
  if (props.clicked) {
    buttonClass.push("btn_aside_active");
  }

  return (
    <nav className="Header p-2 w-100 bg-info d-flex justify-content-between">
      <div className="Header-Left w-25 d-flex justify-content-start">
        <button
          onClick={props.asideToggler}
          type="button"
          className={buttonClass.join(" ")}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="Header-Right w-25 d-flex justify-content-end">
        <LogOutBtn />
      </div>
    </nav>
  );
};

export default Header;
