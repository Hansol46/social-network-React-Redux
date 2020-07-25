// const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';
const SEND_MESSAGE ='SEND_MESSAGE';

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
      {id: 3, text: 'Yo?'},
      {id: 4, text: 'go way?'},
      {id: 5, text: 'pls, touch you phone!'}
    ],

  };

const dialogsReducer = (state = initialState, action) =>{
  switch (action.type) {
    case SEND_MESSAGE:
      let newMess = {
        id: 6,
        text: action.letter,
      };
      return{
        ...state,
        messageData: [...state.messageData, newMess]
      }
    default:
      return state;
  }

}

export const addMess =(letter) => {return ({type: SEND_MESSAGE, letter})}

export default dialogsReducer;