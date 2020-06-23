import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = (props) => {
    let buttonClass = {};
    if (props.clicked) {
        buttonClass.class = 'btn btn_aside btn-primary btn_aside_active';
    } else {
        buttonClass.class = 'btn btn_aside btn-primary';
    }

    return (
        <header className="Header p-2 w-100 bg-info d-flex justify-content-between">
            <div className="Header-Left w-25 d-flex justify-content-start">
                <button
                    onClick={props.asideToggler}
                    type="button" className={buttonClass.class}><FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <div className="Header-Right w-25 d-flex justify-content-end">
                <button type="button" className="btn btn_logout btn-primary" onClick={() => document.cookie = 'userId=zero; max-age=0'}>Log out</button>
            </div>
        </header>
    )
}

export default Header
