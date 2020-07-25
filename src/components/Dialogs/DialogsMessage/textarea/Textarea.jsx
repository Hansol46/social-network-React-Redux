import React from "react";
import { reduxForm, Field } from "redux-form";
import DialogsMessage from "../DialogsMessage";
import { required, MaxLengthCreator } from "../../../../utils/validators/validator";
import { TextArea } from "../../../../components/FormsControls/FormsControls";
const maxLength = MaxLengthCreator(30)
// <---------------------- FORM_COMPONENT
const MessageForm = (props) => {
  
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          name="letter"
          component={ TextArea }
          placeholder={"Enter your message"}
          validate={[required, maxLength]}
        />
        <div>
          {" "}
          <button>Add message</button>
        </div>
      </form>
    </div>
  );
};

// <---------------------- REDUX_FORM
const EnterLetterReduxForm = reduxForm({
  form: "letter",
})(MessageForm);



// <---------------------- the main component
function Textarea(props) {

  let postsLetters = props.messageData.map((letter) => (
    <DialogsMessage text={letter.text} />
  ));

  let AddNewMessage = (values) => {
    props.addMess(values.letter);
  };
  return (
    <div>
      {postsLetters}
      <EnterLetterReduxForm onSubmit={AddNewMessage} />
    </div>
  );
}

export default Textarea;
