import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { setUsersAC, unfollowAC, followAC } from '../../redux/users-reducer';

function mapStateToProps (state) {
    return {
        usersData: state.usersPage.usersData,    
    }
}

function mapDispatchToProps(dispatch) {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (usersData) => {
            dispatch(setUsersAC(usersData));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);