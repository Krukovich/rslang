import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = (props) => {
    const buttonClass = ['btn', 'btn_aside', 'btn-primary'];
    if (props.clicked) {
        buttonClass.push('btn_aside_active');
    }

    return (
        <header className="Header p-2 w-100 bg-info d-flex justify-content-between">
            <div className="Header-Left w-25 d-flex justify-content-start">
                <button
                    onClick={props.asideToggler}
                    type="button" className={buttonClass.join(' ')}><FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <div className="Header-Right w-25 d-flex justify-content-end">
<<<<<<< HEAD
                <button type="button" className="btn btn_logout btn-primary">Logout</button>
=======
              <button onClick={() => document.cookie = 'userId=zero; max-age=0'}>
                Logout
              </button>
>>>>>>> feat: add fetch data and code refactor
            </div>
        </header>
    )
}

export default Header