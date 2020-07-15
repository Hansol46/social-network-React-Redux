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

      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer store={props.store}/>
            
    </section>
  );
}

export default Profile;
