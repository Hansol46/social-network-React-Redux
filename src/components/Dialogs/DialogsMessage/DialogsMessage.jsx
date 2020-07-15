import React from 'react';
import ss from './../Header/Dialogs.module.sass';




function DialogsMessage (props) {

    return (
        <div> 



        <div className={ss.message}> 
            <p>{props.text}</p> 
            
        </div>
        



        </div>
        
    );

}


export default DialogsMessage;