import React from "react";
import ss from "./Navbar.module.sass";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={ss.nav}>
      <ul>
        <li className={ss.item}> <NavLink to="/profile" activeClassName={ss.activeLink}> Profile</NavLink></li>
        <li className={`${ss.item} ${ss.active}`}><NavLink to="/message" activeClassName={ss.activeLink}> Message</NavLink> </li>
        <li className={ss.item}> <NavLink to="/news" activeClassName={ss.activeLink}>News</NavLink> </li>
        <li className={ss.item}> <NavLink to="/music" activeClassName={ss.activeLink}>Music</NavLink> </li>
        <li className={ss.item}> <NavLink to="/settings" activeClassName={ss.activeLink}> Settings</NavLink> </li>
        <li className={`${ss.item} ${ss.friends}`}> 
          <NavLink to="/friends" activeClassName={ss.activeLink}> Friends Online :</NavLink>
            <div className={ss.photo}>
              <img src="https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1" alt="Avatar"/>
                <img src="https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1" alt="Avatar"/> 
                  <img src="https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1" alt="Avatar"/>
                    </div>
                      <div className={ss.names}>
                        <span> Alex</span> 
                          <span> Max</span> 
                            <span> Any</span> 
                              </div>
                                </li>
      </ul>
    </nav>
  );
}

export default Navbar;
