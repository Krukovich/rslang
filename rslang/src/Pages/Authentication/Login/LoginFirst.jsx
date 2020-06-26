import React from "react";
import { Link } from 'react-router-dom'
import './LoginFirst.scss'

export function LoginFirst() {
    return (
            <div className="cover-container d-flex h-100 p-3 flex-column align-items-center animatedbackground vh-100">
                <div className="textstart">
                    <p className="text-center">Перед тем как играть необходимо войти</p>
                </div>
               <button type="button" class="btnstart btn btn-info">Login</button>
            </div>
    )
}