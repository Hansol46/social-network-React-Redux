import React from "react";
import ss from "./ProfileInfo.module.sass";
import Loader from "../../Users/Loader/Loader";
import ProfileStatus from './ProfileStatus';

// shift+alt+f
function ProfileInfo(props) {
if(!props.profile) {//         ! - отрицание, то есть если пропсов нет, или они null, undefined 
  return <Loader />
}
  

  return (
    <div className={ss.description}>
    <img
      src={props.profile.photos.large} 
      alt=""
    ></img>
    
      <div className={ss.names}>
      <p>Name: {props.profile.fullName}</p>
      <p>Live: New-York</p>
      <p>About me: {props.profile.aboutMe}</p>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>


      </div>
  </div>
  );
}

export default ProfileInfo;
