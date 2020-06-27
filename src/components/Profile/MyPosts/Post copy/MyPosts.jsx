import React from "react";
import ss from "./MyPosts.module.sass";

// shift+alt+f
function MyPosts() {
  return (
    <div>
      My post
      <textarea></textarea>
      <button type='submit'>Add posts</button>
      <div>new post</div>
      <div>
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
  );
}

export default MyPosts;
