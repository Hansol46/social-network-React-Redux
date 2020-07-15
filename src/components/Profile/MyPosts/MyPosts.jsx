import React from "react";
import ss from "./MyPosts.module.sass";
import Post from "./Post/Post";



// shift+alt+f
function MyPosts(props) {
  
  let postsElements = props.postData.map (post => <Post Name={post.name} key={post.id} message={post.message} />);  

  let newPostElement = React.createRef();
  
  

  // let addPost = () => {
  //   props.addPost();

  // };
  // let onPostChange = () => {
  //   
  //   let text = newPostElement.current.value;
  //   props.updateNewPostTextActionCreator(text);
  // }


  return (
    

    <div className={ss.postsBlock}>
      <p> My post</p>
      
      <div><textarea placeholder='Enter your message' cols="30" rows="4" 
                  ref={newPostElement} 
                        onChange={props.updateNewPostText} 
                              value={props.newPostText}/></div> 


      <div><button type="submit" onClick={()=>props.addPost}>Add posts</button></div>  
      <br/>
      <div>new post</div>
      <div>
        {postsElements}

      </div>
    </div>


  );
}

export default MyPosts;
