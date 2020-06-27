import React from "react";
import ss from "./Profile.module.sass";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// shift+alt+f
function Profile(props) {


  return (
    <section className={ss.content}>

      <ProfileInfo />
      <MyPostsContainer store={props.store}
      // postData = {props.localState.postData} 
      //   dispatch={props.dispatch}

            />
            
    </section>
  );
}

export default Profile;
