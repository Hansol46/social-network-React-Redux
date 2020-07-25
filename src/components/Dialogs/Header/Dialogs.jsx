import React from "react";
import ss from "./Dialogs.module.sass";
import DialogsItem from "../DialogsItem/DialogItem";
import DialogsMessage from "../DialogsMessage/DialogsMessage";
import TextAreaContainer from "../DialogsMessage/textarea/TextareaContainer";
import { Redirect } from "react-router-dom";
import { AuthRedirect } from "../../../hoc/Redirect";

function Dialogs(props) {






  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => (

    <DialogsItem store={props.store}
    name={dialog.name} id={dialog.id} 
  />));


  

  let dialogMessages = state.messageData.map((mess) => (
    <DialogsMessage store={props.store}
    text={mess.text} 
  />));



  // alert(props.isAuth)


  let AuthRedirectComponent = AuthRedirect(Dialogs);
  
 



  return ( 
    
    <div className={ss.dialogs}>
      <div className={ss.dialogs__items}>{dialogsElements}</div>

      <div className={ss.dialog__message}>
        <div>
          <TextAreaContainer store={props.store}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
