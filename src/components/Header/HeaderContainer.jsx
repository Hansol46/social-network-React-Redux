import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import Axios from "axios";
import {authentication, logout} from "../../redux/auth-reducer";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {

  
  componentDidMount = () => {


    this.props.authentication();



  };

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { authentication, logout  })(HeaderContainer);
