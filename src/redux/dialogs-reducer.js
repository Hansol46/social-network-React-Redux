const UPDATE_MEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';
const ADD_MESS = 'ADD-MESS';

let initialState = {

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
  };

const dialogsReducer = (state = initialState, action) =>{
  switch (action.type) {
    case ADD_MESS: {
      let newMess ={
        id:6,
        text: state.newMessText,
      };
      return {
        ...state,
        messageData: [...state.messageData, newMess]
      };
    };
    case UPDATE_MEW_MESS_TEXT: {
      return {
        ...state,
        newMessText: action.newMess ,
      };
    }
    default:
      return state;
  }

}

export const addMessActionCreator = () => {
    return ({type: ADD_MESS})
  };
  
  export const updateNewMessTextActionCreator = (mess) => {
    return ({ type: UPDATE_MEW_MESS_TEXT, newMess: mess});
  };
  
export default dialogsReducer;