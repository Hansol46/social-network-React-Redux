import React from 'react';
import ss from './Header.module.sass';

function Header(props) {
    return (

    <header className={ss.header}>  <h1>BearSocialNetwork</h1>
    <img src='https://img.championat.com/i/99/79/15239599791020758660.jpg' alt='image no found' title="logo"></img>
    
    
    </header>
    );
};

export default Header;