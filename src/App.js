import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Header/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/Dialogs/Header/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Music/Settings";
import Friends from "./components/Friends/Friends";

function App(props) {

  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Navbar />

        <div className="app__wrapper__content">

          <Route path='/message' render={() => <Dialogs store={props.store}
            // localState = {props.appState.dialogsPage} dispatch={props.dispatch}
              />}
              />

          <Route path='/profile' render={() => <Profile store={props.store}
            // localState = {props.appState.profilePage} 
            // dispatch={props.dispatch}
              />}
                />

          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/friends' render ={() => <Friends/>} />
 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
