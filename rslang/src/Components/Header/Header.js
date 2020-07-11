import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { LogOutBtn } from "../../Components/Buttons/LogOut";
import { Link } from "react-router-dom";

import logo from './RSLANG.png'

const Header = (props) => {
  const buttonClass = ["btn", "btn_aside", "btn-rslang"];
  if (props.clicked) {
    buttonClass.push("btn_aside_active");
  }

  return (
    <nav className="Header w-100 d-flex justify-content-between">
      <div className="Header-Left p-2 w-25 d-flex justify-content-start">
        <button
          onClick={props.asideToggler}
          type="button"
          className={buttonClass.join(" ")}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="Header-Center d-flex align-items-center">
        <Link className="" to={'/main-page'}>
          <div className="logo">
            <img src={logo} />
          </div>
        </Link>
      </div>
      <div className="Header-Right p-2 w-25 d-flex justify-content-end">
        <LogOutBtn />
      </div>
    </nav>
  );
};

export default Header;
