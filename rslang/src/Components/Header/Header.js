import React from "react";

import { LogOutBtn } from "../../Components/Buttons/LogOut";
import logo from '../../Pages/AboutPage/assets/git.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

const Header = (props) => {
  const buttonClass = ["btn", "btn_aside", "btn-primary"];
  if (props.clicked) {
    buttonClass.push("btn_aside_active");
  }

  return (
    <nav className="Header p-1 w-100 d-flex justify-content-between">
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
        <a href="https://github.com/Krukovich/rslang">
          <img className="Logo" src={ logo } alt="logo" />
        </a>
        <LogOutBtn />
      </div>
    </nav>
  );
};

export default Header;
