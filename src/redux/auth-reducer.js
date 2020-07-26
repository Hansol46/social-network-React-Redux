import { usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'; // установить пользовательские данные 


let initialState = {

    id: null,
    email: null,
    login: null,
    isAuth: false,
    // isFetching: false,  
  
  };    

const AuthReducer = (state = initialState, action ) => {
        switch (action.type) {
        case SET_USER_DATA: 
        return {
            ...state, 
            ...action.data
        }; 

        default:
        return state;
    }
}

export const setAuthUsersData = (id, email, login, isAuth) => ({type:SET_USER_DATA, data: {id, email, login, isAuth }});

// thunk creators
export const authentication = () => {
    return (dispatch) => {
        usersAPI.AuthMe().then( response => {
            if (response.data.resultCode == 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUsersData(id, email, login, true));
            }
          });
    }
};
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        usersAPI.login(email, password, rememberMe).then( response => {
            if (response.data.resultCode == 0) {
                dispatch(authentication());
            }
            else {
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : "Some error!";
                dispatch(stopSubmit('login', {email: messages}));
            }
          });
    }
};
export const logout = () => {
    return (dispatch) => {
        usersAPI.logout().then( response => {
            if (response.data.resultCode == 0) {
                dispatch(setAuthUsersData(null, null, null, false));
            }
          });
    }
}

export default AuthReducer;