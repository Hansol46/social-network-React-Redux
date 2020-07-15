import React from 'react';
import { connect } from 'react-redux';
import { addMess, updateNewMessText } from '../../../../redux/dialogs-reducer';
import Textarea from './Textarea'
import { AuthRedirect } from '../../../../hoc/Redirect';
import { compose } from 'redux';


class TextAreaContainer extends React.Component {
    addMess = () =>{
        return this.props.addMess;
    };
    updateNewMessText = () => {
        // this.props.addMessageElement = React.createRef();
        return this.props.updateNewMessText(this.props.addMessageElement.current.value);
    };

    render () {
        return ( 
        <>
        <Textarea 
            addMess={this.props.addMess}
            updateNewMessText={this.props.updateNewMessText}
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


// let AuthRedirectComponent = AuthRedirect(TextAreaContainer);

// export default connect (mapStateToProps, {addMess, updateNewMessText}) (AuthRedirectComponent);

// compose(
//     connect (mapStateToProps, {addMess, updateNewMessText}),
//     AuthRedirect
// )(TextAreaContainer);

export default compose(
    connect (mapStateToProps, {addMess, updateNewMessText}),
    AuthRedirect
)(TextAreaContainer);