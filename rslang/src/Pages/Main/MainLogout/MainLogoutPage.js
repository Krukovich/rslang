import React from "react";
import { Link } from 'react-router-dom';


export const LogoutPage = () => {
    return (
        <>
        <button onClick={() => document.cookie = 'userId=zero; max-age=0'}>
            Logout
        </button>
        <Nav />
        </>
    )
};

class Nav extends React.Component{
    render(){
        return <nav>
                <Link to="/">Login</Link>  
                <Link to="/about">О нас</Link>  
                <Link to="/PlayZonePage">PlayZonePage</Link>
               </nav>;
    }
}
