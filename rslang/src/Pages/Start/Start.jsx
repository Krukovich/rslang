import React from "react";
import { Link } from 'react-router-dom'
import './Start.scss'

export function Start() {
    return (
            <div className="cover-container d-flex h-100 p-3 flex-column align-items-center animatedbackground vh-100">
                <div className="textstart">
                    <p className="text-center">Хорошая игра - бесплатно и без рекламы</p>
                </div>
               <button type="button" class="btnstart btn btn-info">Start game</button>
            </div>
    )
}