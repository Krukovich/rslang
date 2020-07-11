import React from "react";
import { MDBRow } from 'mdbreact';

import './words.scss';

const Words = ({ string }) => {
  const regexp = /<[^<>]+>/g;
  const words = string.replace(regexp, '').split(' ');

  const dragStart = (event) => {
    const li = event.target;
    li.style.transform = 'translate(0px,0px)';
    li.style.zIndex = '10';
    li.classList.add('move');

    document.body.onmouseup = () => {
      const ul = document.getElementById('ul');
      document.body.onmouseup = null;
      document.body.onmousemove = null;
      li.style.zIndex = '0';
      li.classList.remove('move');
      ul.append(...[...ul.children].sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left));
      [...ul.children].forEach((li) => li.style.transform = 'translate(0px,0px)');
    }
  
    document.body.onmousemove = (event) => {
      const [ x, y ] = li.style.transform.match(/-?\d+/g);
      li.style.transform = `translate(${ +x + event.movementX }px, ${ +y + event.movementY }px)`;
    };
  } 
  
  const wordsList = words.map((word, index) =>
    <li
      key={ index }
      className="word list-group-item list-group-item-action ml-2"
      onMouseDown={ dragStart }
    >
      { word } 
    </li>
  );

  return (
    <MDBRow>
      <ul className="words-list" id='ul'>
        { wordsList }
      </ul>
    </MDBRow>
  );
};

export default Words;
