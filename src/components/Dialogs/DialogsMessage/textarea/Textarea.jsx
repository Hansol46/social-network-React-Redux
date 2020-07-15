import React from 'react';
// import {  } from '../../../../redux/dialogs-reducer';

function Textarea (props) {






    let addMessageElement = React.createRef();


    return(
        <div> 
        <div><textarea placeholder='Enter your message' cols="30" rows="4" 
            ref={addMessageElement} 
                value={props.newMessText} 
                    onChange={props.updateNewMessText}></textarea> </div>
                    
        <div> <button  onClick={() => props.addMess}>Add message</button></div>

        </div>
    );


}

export default Textarea; 