import React from 'react';
import ss from './Header.module.sass';
import { NavLink} from 'react-router-dom';

function Header(props) {
    return (

    <header className={ss.header}>  
   
        <h1>BearSocialNetwork</h1> 
        <img src='https://img.championat.com/i/99/79/15239599791020758660.jpg' alt='image no found' title="logo" />
    

        <div className={ss.loginBlock}>
             {props.isAuth ? <div>User name: {props.login} <button onClick={props.logout}> Logout</button> </div>  : <NavLink to={'/login'}> Login </NavLink> }
            
        </div>
    </header>
    );
};

export default Header;