import React from "react";
import ss from "./MyPosts.module.sass";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required,MaxLengthCreator } from "../../../utils/validators/validator";
import { TextArea } from "../../FormsControls/FormsControls";

const maxLength = MaxLengthCreator(20)
// <---------------------- FORM_COMPONENT
let PostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          name={"posts"}
          component={TextArea}
          placeholder="Enter your message"
          validate={[required, maxLength]}
        />
        <div>
          <button>Add posts</button>
        </div>
      </form>
    </div>
  );
};

const CreatePostReduxForm = reduxForm({
  form: "posts",
})(PostForm);

// shift+alt+f
function MyPosts(props) {
  export const onRemove = (id) => {
    props.postData.filter( post => post.id !== id)
  }
  let postsElements = props.postData.map((post) => (
    <Post Name={post.name} key={post.id} message={post.message} onRemove={props.onRemove} postData={props.postData} id={post.id}
    // state={props.state}
    />
  ));

  let addPost = (values) => {
    props.addPost(values.posts);
  };
  
  return (
    <div className={ss.postsBlock}>
      <p> My post</p>
      <CreatePostReduxForm onSubmit={addPost} />
      <br />
      <div>new post</div>
      <div>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
