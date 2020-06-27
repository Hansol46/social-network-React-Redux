import React from "react";
import ss from "./ProfileInfo.module.sass";


// shift+alt+f
function ProfileInfo() {
  return (
    <div className={ss.description}>
    <img
      src="https://cdn.pixabay.com/photo/2015/05/01/10/32/seagull-748201_960_720.jpg"
      alt="image no found"
      title="image"
    ></img>
    <div className={ss.names}>
    <p>Name: Mark Yunihavaginakies-Hulagupada</p>
    <p>Live: New-York</p>
    <p>About me: i best man on my university. Play basketball, computer games and i frontend developer</p>


    </div>
  </div>
  );
}

export default ProfileInfo;
