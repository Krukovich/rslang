import React from 'react';
import { NavItem } from './NavItem/NavItem';
import './Sidebar.scss';

export const Sidebar = (props) => {
  let asideClass = {};
  if (props.clicked) {
    asideClass.class = 'aside flex-shrink-1 vh-100 p-5 bg-secondary position-fixed aside_active';
  } else {
    asideClass.class = 'aside flex-shrink-1 vh-100 p-5 bg-secondary position-fixed';
  }

<<<<<<< HEAD
  return (
    <aside className={asideClass.class}>
      <ul className="nav nav-pills flex-column align-items-center">
        <NavItem href='/' title='Главная' />
        <NavItem href='/play-zone' title='Изучение слов' />
        <NavItem href='/long-stats' title='Статистика' />
        <NavItem href='/vocabulary' title='Словарь' />
        <NavItem href='/mini-games' title='Мини игры' />
        <NavItem href='/promo' title='Промо' />
        <NavItem href='/about' title='Команда' />
        <NavItem href='/settings' title='Настройки' />
      </ul>
    </aside>
  )
=======
    return (
        <aside className={asideClass.class}>
            <ul className="nav nav-pills flex-column align-items-center">
                <NavItem href='/' title='Главная' />
                <NavItem href='/playzone' title='Изучение слов' />
                <NavItem href='/long-stats' title='Статистика' />
                <NavItem href='/learning-words' title='Словарь' />
                <NavItem href='/minigames' title='Мини игры' />
                <NavItem href='/promo' title='Промо' />
                <NavItem href='/about' title='Команда' />
                <NavItem href='/settings' title='Настройки' />
            </ul>
        </aside>
    )
>>>>>>> refactor: remove unnecessary function playExampleSound
}
