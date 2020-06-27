const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';


let initialState = {

  postData: [
      {id: 1, name: "Alex Vasilev", message: "hi, how are you?"},
      {id: 2, name: "Mary Iva", message: "its my first post"},
      {id: 3, name: "Anna Konev", message: "go hell!"},
      {id: 4, name: "Ivan Pahanov", message: "Bla-bla"},
      {id: 5, name: "Max Konev", message: "you best man! p.s.:sarcasm"}
    ],

  newPostText: " "
  
  };

const profileReducer = (state = initialState, action ) => {
    switch (action.type) {
      case ADD_POST: {
        let newPost = {
          id: 5,
          name: 'Me',
          message: state.newPostText,
        };
        return {
          ...state,
          postData:  [...state.postData, newPost],
          newPostText: '',
          };
      };
      case UPDATE_NEW_POST_TEXT: {
        return {
          ...state,
          newPostText: action.newText,
        };
      }
      default:
        return state;
    }

}

export const addPostActionCreator = () => {
    return ({type: ADD_POST})
  };
  
export const updateNewPostTextActionCreator = (text) =>{
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
};
  
export default profileReducer;