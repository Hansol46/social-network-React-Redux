import { usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {

  postData: [
      {id: 1, name: "Alex Vasilev", message: "hi, how are you?"},
      {id: 2, name: "Mary Iva", message: "its my first post"},
      {id: 3, name: "Anna Konev", message: "go hell!"},
      {id: 4, name: "Ivan Pahanov", message: "Bla-bla"},
      {id: 5, name: "Max Konev", message: "you best man! p.s.:sarcasm"}
    ],
  profile: null,
  status: " ",
  
  };

const profileReducer = (state = initialState, action ) => {
    switch (action.type) {
      case ADD_POST: {
        let newPost = {
          id: 5,
          name: 'Me',
          message: action.posts,
        };
        return {
          ...state,
          postData:  [...state.postData, newPost],
          };
      };

      case SET_USER_PROFILE: {
        return {...state, profile: action.profile}
      };
      case SET_STATUS: {
        return {
          ...state,
          status: action.status,
        }
      }
      default:
        return state;
    }

}
export const onRemove = (id) => {
  initialState.postData.filter( post => post.id !== id)
}

// Action creators 
export const addPost = (posts) => ({type: ADD_POST, posts});

export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});


// Thunk creators 
export const getStatus = (userId) => {
  return(dispatch) => {
    usersAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    })
  }
}

export const updateStatus = (status) => {
  return(dispatch) => {
    usersAPI.updateStatus(status).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setStatus(response.data));
      }
    })
  }
}

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.profileUserId(userId).then((response) => {
    dispatch(setUserProfile(response.data)); // нам теперь нужно законектить и отправить все в нашу классовую компоненту   
    })
  }
}
export default profileReducer;