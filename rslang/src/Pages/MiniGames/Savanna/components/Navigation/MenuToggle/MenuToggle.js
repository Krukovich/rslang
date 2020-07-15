import React from 'react'
import './MenuToggle.css'

const MenuToggle = props => {
  let cls = 'MenuToggle' + ' fa';

  if (props.isOpen) {
    cls = cls + ' fa-times';
    cls = cls + ' open';
  } else {
    cls = cls + ' fa-bars';
  }

  return (
    <i
      className={cls}
      onClick={props.onToggle}
    />
  )
}

export default MenuToggle