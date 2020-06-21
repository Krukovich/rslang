import React from 'react';
import NavItem from './NavItem/NavItem';
import './Sidebar.scss';

const Sidebar = (props) => {
    let asideClass = {};
    if (props.clicked) {
        asideClass.class = 'aside flex-shrink-1 vh-100 p-5 bg-secondary position-fixed aside_active';
    } else {
        asideClass.class = 'aside flex-shrink-1 vh-100 p-5 bg-secondary position-fixed';
    }

    return (
        <aside className={asideClass.class}>
            <ul className="nav nav-pills flex-column align-items-center">
                <NavItem href='/' title='Home' />
                <NavItem href='/minigames' title='Mini games' />
                <NavItem href='/about' title='About' />
                <NavItem href='/settings' title='Settings' />
            </ul>
        </aside>
    )
}

export default Sidebar
