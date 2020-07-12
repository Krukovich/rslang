import React from 'react';
import { NavItem } from './NavItem/NavItem';
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
        <NavItem href='/' title='Главная' />
        <NavItem href='/play-zone' title='Изучение слов' />
        <NavItem href='/long-stats' title='Статистика' />
        <NavItem href='/learning-words' title='Словарь' />
        <NavItem href='/mini-games' title='Мини игры' />
        <NavItem href='/promo' title='Промо' />
        <NavItem href='/about' title='Команда' />
        <NavItem href='/settings' title='Настройки' />
      </ul>
    </aside>
  )
}
