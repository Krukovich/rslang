import React from 'react';
import { NavItem } from './NavItem/NavItem';
import { Translation } from 'react-i18next';
import './Sidebar.scss';

export const Sidebar = (props) => {
  let asideClass = {};
  if (props.clicked) {
    asideClass.class = 'Sidebar aside flex-shrink-1 vh-100 p-5 position-fixed aside_active';
  } else {
    asideClass.class = 'Sidebar aside flex-shrink-1 vh-100 p-5 position-fixed';
  }

  return (
    <aside className={asideClass.class}>
      <ul className="nav flex-column align-items-center">
        <NavItem href='/' title='sidebar.1' />
        <NavItem href='/play-zone' title='sidebar.2' />
        <NavItem href='/long-stats' title='sidebar.3' />
        <NavItem href='/learning-words' title='sidebar.4' />
        <NavItem href='/mini-games' title='sidebar.5' />
        <NavItem href='/promo' title='sidebar.6' />
        <NavItem href='/about' title='sidebar.7' />
        <NavItem href='/settings' title='sidebar.8' />
      </ul>
    </aside>
  )
}
