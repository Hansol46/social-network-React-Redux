import React from "react";
import { addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


class MyPostsContainer extends React.Component {
  // addPost = () => {
  //   this.props.addPost();
  // };

  render() {
    return (
      <>
      <MyPosts 
      // updateNewPostText={this.props.updateNewPostText}
      addPost={this.props.addPost}
      postData={this.props.postData}
      newPostText={this.props.newPostText}
      onRemove={this.props.onRemove}
      // remove={this.props.remove}
      />
      </>
    );

  }
}
export const onRemove = (id) => {
  postData.filter( post => post.id !== id)
}

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    
    addPost: (posts) => {
      dispatch(addPost(posts));
    },
  }

}


export default connect (mapStateToProps, mapDispatchToProps) (MyPostsContainer);

