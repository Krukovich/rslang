import React from 'react';
import './NavItem.scss';
import { Link } from "react-router-dom";

export const NavItem = (props) => {
  return (
    <li className="nav-item w-100 mt-2">
      <Link className="nav-link w-100 bg-primary text-center" to={props.href}>{props.title}</Link>
    </li>
  )
}
