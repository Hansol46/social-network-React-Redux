import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: AuthReducer,
    form: formReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;




export default store;