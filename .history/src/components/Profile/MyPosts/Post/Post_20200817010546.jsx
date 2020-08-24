import React, { useState } from "react";
import ss from "./Post.module.sass"; // привязывает ss к конретному сss модулю 



function Counter () {
  const [like, setLike] = useState(0);
  return (
    <div>
      <button onClick={()=> { setLike(like+1)}}>I like!</button>
      <span>Like: {like}</span>
      
    </div>
  )
};
// shift+alt+f
function Post(props) { // позволяет нам создавать props object в котором мы можем хранить данные
  let styles = {
      button: {
        marginLeft: '40px'
      }
  }
  return (

      <div className={ss.postsBlock }>
      <p> { props.Name } </p> 
        <img className={ss.img} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'></img>
        { props.message }   
        <button style={styles.button} onClick={() => 
          // props.onRemove(props.postData.id)
          console.log(props.postData.id)
          }>&#10060;</button>
        <Counter />
      </div>
      

  );

}

export default Post;
