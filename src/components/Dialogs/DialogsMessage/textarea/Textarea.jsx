import React from 'react';
import { addMessActionCreator, updateNewMessTextActionCreator } from '../../../../redux/dialogs-reducer';

function TextArea (props) {


    let addMessageElement = React.createRef();

    function addMess(){
        props.addMess();
    };
    
    function onMessChange () {
        let mess = addMessageElement.current.value;
        props.updateNewMessTextActionCreator(mess);
    }

    return(
        <div> 
        <div><textarea placeholder='Enter your message' cols="30" rows="4" ref={addMessageElement} value={props.newMessText} onChange={onMessChange}></textarea> </div>
        <div> <button  onClick={addMess}>Add message</button></div>

        </div>
    );
}

export default TextArea; 