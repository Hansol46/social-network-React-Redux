import { usersAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {

  postData: [
      {id: 1, name: "Alex Vasilev", message: "hi, how are you?"},
      {id: 2, name: "Mary Iva", message: "its my first post"},
      {id: 3, name: "Anna Konev", message: "go hell!"},
      {id: 4, name: "Ivan Pahanov", message: "Bla-bla"},
      {id: 5, name: "Max Konev", message: "you best man! p.s.:sarcasm"}
    ],

  newPostText: " ",
  profile: null,
  
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
      case SET_USER_PROFILE: {
        return {...state, profile: action.profile}
      }
      default:
        return state;
    }

}

export const addPost = () => ({type: ADD_POST});
  
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});


export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.profileUserId(userId).then((response) => {
    dispatch(setUserProfile(response.data)); // нам теперь нужно законектить и отправить все в нашу классовую компоненту   
    })
  }
}
export default profileReducer;