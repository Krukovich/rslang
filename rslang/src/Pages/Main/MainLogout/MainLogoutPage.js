import React from "react";


export const LogoutPage = () => {

    return (
        <button onClick={() => document.cookie = 'userId=zero; max-age=0'}>
            Logout
        </button>
    )
};
