import React from "react";
import { connect } from "react-redux";
import { setUsers, toggleIsFetching, getUsersThunkCreator,followEnter, unfollowEnter } from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "./Loader/Loader";
import { usersAPI } from "../../api/api";
import { compose } from "redux";

class UsersContainer extends React.Component {
  
  componentDidMount = () => {
    this.props.getUsersThunkCreator();
  };


  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}

        <Users
          usersData={this.props.usersData}
          unfollowEnter={this.props.unfollowEnter}
          followEnter={this.props.followEnter}
        />
        ;
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    usersData: state.usersPage.usersData,
    isFetching: state.usersPage.isFetching,
  };
}




export default connect(mapStateToProps, 
  { unfollowEnter, followEnter,
      setUsers, toggleIsFetching, 
        getUsersThunkCreator, })(UsersContainer); 
// вместо функции диспатча используем объект
// из редъюсора переменовываем все АС и импортируем сюда 
