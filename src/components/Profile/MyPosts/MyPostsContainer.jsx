import React from "react";
import { addPost, updateNewPostText } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


class MyPostsContainer extends React.Component {
  addPost = () => {
    this.props.addPost();
  };
  updateNewPostText = () => {
    return this.props.updateNewPostText(this.props.newPostElement.current.value);
  }



  render() {
    return (
      <>
      <MyPosts 
      updateNewPostText={this.props.updateNewPostText}
      addPost={this.props.addPost}
      postData={this.props.postData}
      newPostText={this.props.newPostText}
      />
      </>
    );

  }
}


let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
    
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },
//     onPostChange: (text) => {
//       let action = updateNewPostTextActionCreator(text);
//       dispatch(action); 
//     }
//   }

// }


export default connect (mapStateToProps, {addPost, updateNewPostText}) (MyPostsContainer);

