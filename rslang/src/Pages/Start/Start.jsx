import React from "react";
import { Link } from 'react-router-dom'
import './Start.scss'
import { useHistory } from "react-router-dom";

export function Start() {
    let history = useHistory();
    return (
            <div className="cover-container d-flex h-100 p-3 flex-column align-items-center animatedbackground vh-100">
                <div className="textstart">
                    <p className="text-center">Хорошая игра - бесплатно и без рекламы</p>
                </div>
               <button type="button" className="btnstart btn btn-info" onClick={() => history.push("/login")}>Start game</button>
            </div>
    )
}
