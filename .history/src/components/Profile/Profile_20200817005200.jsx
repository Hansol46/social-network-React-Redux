import React from "react";
import ss from "./Profile.module.sass";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Redirect } from "react-router-dom";
import { AuthRedirect } from "../../hoc/Redirect";

// shift+alt+f
function Profile(props) {
  


  
  





  return (
    <section className={ss.content}>

      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer store={props.store} onRemove={props.onRemove} remove={props.remove}/>
            
    </section>
  );
}

export default Profile;
