import React from 'react';
import ss from './../Header/Dialogs.module.sass';
import { NavLink, Route } from 'react-router-dom';

function DialogsItem (props){
    let path = '/message/' + props.id;

    return (
        <div className={ss.items}>
                <NavLink to={path} activeClassName={ss.activeMess}> {props.name}</NavLink>
        </div>
    )
}



export default DialogsItem;