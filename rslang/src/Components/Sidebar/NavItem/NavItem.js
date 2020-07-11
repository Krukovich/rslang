import React from 'react';
import './NavItem.scss';
import { Link } from "react-router-dom";

export const NavItem = (props) => {
  return (
    <li className="nav-item w-100 btn-rslang mt-2">
      <Link className="nav-link w-100 text-center" to={props.href}>{props.title}</Link>
    </li>
  )
}
