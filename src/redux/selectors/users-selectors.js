import { createSelector } from "reselect";

const getUsers = (state) => {
    return state.usersPage.usersData;
}
export const getUsersSelector = createSelector(getUsers, (usersData) => {
    return usersData;
})



export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}