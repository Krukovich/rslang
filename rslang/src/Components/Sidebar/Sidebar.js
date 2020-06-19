import React, { Component } from 'react';
import NavItem from './NavItem/NavItem';

class Sidebar extends Component {

    render() {
        return (
            <aside className="aside flex-shrink-1 vh-100 p-5 bg-secondary position-fixed">
                <ul className="nav nav-pills flex-column align-items-center">
                    <NavItem href='/' title='Home' />
                    <NavItem href='/minigames' title='Mini games' />
                    <NavItem href='/about' title='About' />
                    <NavItem href='/settings' title='Settings' />
                </ul>
            </aside>
        )
    }
}

export default Sidebar