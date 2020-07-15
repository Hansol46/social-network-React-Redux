import Axios from "axios";


export const instance = Axios.create(
    {
        withCredentials: true, //это все данные пароли логины и т.д
        headers: {
            "API-KEY": "e9596a3b-8dfb-4990-a788-01881ac46db4",
          },
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    }
)


export const usersAPI = {
    getUsers() {
        return instance.get("users").then(response => {return response.data});
    },
    AuthMe() {
        return instance.get('/auth/me')
    },
    usersFollow (userID) {
        return (instance.post(`follow/${userID}`))
    },
    usersUnfollow(userID) {
        return (instance.delete(`follow/${userID}`))
    },
    profileUserId(userId) { 
        return (instance.get('/profile/'+ userId))
    },
}


