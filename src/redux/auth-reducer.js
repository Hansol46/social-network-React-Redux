import { usersAPI } from "../api/api";

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
            ...action.data,
            isAuth: true
        }; 

        default:
        return state;
    }
}

export const setAuthUsersData = (id, email, login) => ({type:SET_USER_DATA, data: {id, email, login}});


export const authentication = () => {
    return (dispatch) => {
        usersAPI.AuthMe().then( response => {
            if (response.data.resultCode == 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUsersData(id, email, login));
            }
          });
    }
}

export default AuthReducer;