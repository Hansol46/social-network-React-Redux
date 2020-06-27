import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action); 
    }
  }

}


const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
