import React from 'react';
import { addMessActionCreator, updateNewMessTextActionCreator } from '../../../../redux/dialogs-reducer';
import Textarea from './Textarea'
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        dialogsData:  state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMess: () => {
            dispatch(addMessActionCreator());
                },
        onMessChange: (mess) => {
            dispatch(updateNewMessTextActionCreator(mess))
        }
        
    }
}



const TextAreaContainer = connect (mapStateToProps, mapDispatchToProps) (Textarea);

export default TextAreaContainer; 