import React from 'react';
import { connect } from 'react-redux';
import { addMess } from '../../../../redux/dialogs-reducer';
import Textarea from './Textarea'
import { AuthRedirect } from '../../../../hoc/Redirect';
import { compose } from 'redux';


class TextAreaContainer extends React.Component {
    // addMess = () =>{
    //     return this.props.addMess;
    // };

    render () {
        return ( 
        <>
        <Textarea 
            addMess={this.props.addMess}
            // sendMessageCreator={this.props.sendMessageCreator}
            dialogsData={this.props.dialogsData}
            messageData={this.props.messageData}
        />
        </>
        );
    };
};

let mapStateToProps = (state) => ({
    dialogsData:  state.dialogsPage.dialogsData,
    messageData: state.dialogsPage.messageData,
    isAuth: state.auth.isAuth,
});

let mapDispatchToProps = (dispatch) => {
    return {
        addMess: (letter) => {
            dispatch(addMess(letter))
        },
    }
}


export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    AuthRedirect
)(TextAreaContainer);