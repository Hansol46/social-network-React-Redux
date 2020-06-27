import React from "react";
import ss from "./Post.module.sass"; // привязывает ss к конретному сss модулю 

// shift+alt+f
function Post(props) { // позволяет нам создавать props object в котором мы можем хранить данные

  return (

      <div className={ss.postsBlock }>
      <p> { props.Name } </p> 
        <img className={ss.img} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'></img>
        { props.message }
      </div>

  );

}

export default Post;
