import React from 'react';
import './NavItem.scss';

const NavItem = (props) => {
    return (
        <li className="nav-item w-100 mt-4">
            <a className="nav-link w-100 bg-primary text-center" href={props.href}>{props.title}</a>
        </li>
    )
}

export default NavItem
