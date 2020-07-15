import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Header/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/Dialogs/Header/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Music/Settings";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";

function App(props) {

  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app__wrapper__content">

          <Route path='/message' render={() => <Dialogs store={props.store}
            // localState = {props.appState.dialogsPage} dispatch={props.dispatch}
              />}
              />

          <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store}
            // localState = {props.appState.profilePage} 
            // dispatch={props.dispatch}
              />}
                />

          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music store={props.store}/>} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/friends' render ={() => <Friends/>} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
