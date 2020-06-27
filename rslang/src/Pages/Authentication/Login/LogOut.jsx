import React from "react";
import './LogOut.scss'
import { LogOutBtn } from '../../../Components/Buttons/LogOut'

export function LogOut() {
    return (
        <div className="cover-container d-flex h-100 p-3 flex-column align-items-center animatedbackground vh-100">
            <div className="textstart">
                <p className="text-center">Рады были поиграть с Вами. Приходите к нам еще.</p>
            </div>
            <LogOutBtn />
        </div>
    )
}

