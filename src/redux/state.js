import { renderTree } from "../render";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import { withRouter } from "react-router-dom";


let store = {

  _state: {

    profilePage: {

    postData: [
        {id: 1, name: "Alex Vasilev", message: "hi, how are you?"},
        {id: 2, name: "Mary Iva", message: "its my first post"},
        {id: 3, name: "Anna Konev", message: "go hell!"},
        {id: 4, name: "Ivan Pahanov", message: "Bla-bla"},
        {id: 5, name: "Max Konev", message: "you best man! p.s.:sarcasm"}
      ],

    newPostText: " "
    
    },
    dialogsPage: {

    dialogsData : [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Valera'}
      ],

    messageData : [
        {id: 1, text: 'Hi, man'},
        {id: 2, text: 'how are you?'},
        {id: 2, text: 'Yo?'},
        {id: 2, text: 'go way?'},
        {id: 2, text: 'pls, touch you phone!'}
      ],

    newMessText: " "
    },
},

  getState(){
    return this._state;
  },

  dispatch (action) {

    this._state.profilePage = profileReducer (this._state.profilePage, action );
    this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
    // renderTree(this._state);

    
  },
}






export default store;