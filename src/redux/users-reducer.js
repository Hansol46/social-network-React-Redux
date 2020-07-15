import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  usersData: [
    {
      id: 3,
      photoURL:
        "https://img.championat.com/s/735x490/news/big/l/h/devushka-boec-ufc-potrenirovalas-polnostju-obnazh_1585747769387921109.jpg",
      followed: true,
      fullName: "Mira Evdakomova",
      status: "Iam most popular:) ",
      location: { city: "Minsk", country: "Belarus" },
    },

    {
      id: 3,
      photoURL:
        "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/95e44cfe0abaddb03e43181d31a9f788/960x540",
      followed: false,
      fullName: "Yury Kiryaev",
      status: "Welcome on my page ;-) ",
      location: { city: "Kursk", country: "Russia" },
    },

    {
      id: 20,
      followed: false,
      fullName: "Alex Bolduel",
      status: "forever yang ",
      location: { city: "Rim", country: "Italy" },
    },

    {
      id: 3,
      photoURL:
        "https://pbs.twimg.com/profile_images/378800000710852544/d8832a4e3301975477be73152ca29920_400x400.jpeg",
      followed: false,
      fullName: "James Uncle",
      status: "Play computer game, go with me ",
      location: { city: "NewYork", country: "USA" },
    },

    {
      id: 5,
      photoURL:
        "https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg",
      followed: true,
      fullName: "Usuf Alibama",
      status: "Sadness... ",
      location: { city: "Mumbay", country: "India" },
    },

    {
      id: 6,
      followed: false,
      fullName: "Veron Babaen",
      status: "wait me, iam ready for CHIL ",
      location: { city: "NewYork", country: "USA" },
    },
  ],

  isFetching: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          // map create new Array
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          // map create new Array
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, usersData: [...state.usersData, ...action.usersData] }; // такой вид массива позволяет добавлять в конец новый массив(происходит склеивание)
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId }); // первая кнопка подписаться

export const unfollow = (userId) => ({ type: UNFOLLOW, userId }); // вторая кнопка отписаться

export const setUsers = (usersData) => ({ type: SET_USERS, usersData }); // take data from server

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});



export const getUsersThunkCreator = () => {
  return (dispatch) => { // all logic move in BLL

    dispatch(toggleIsFetching(true)); // return AC

    usersAPI.getUsers().then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
    });
  };
};

export const followEnter = (userID) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true, userID));
    usersAPI.usersFollow(userID).then((response) => {
    if (response.data.resultCode == 0) {
      dispatch(follow(userID));
    }
    dispatch(toggleIsFetching(false, userID));
  });
  }
};

export const unfollowEnter = (userID) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true, userID));
    usersAPI.usersUnfollow(userID).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(unfollow(userID));
      }
      dispatch(toggleIsFetching(false, userID));
    });
  }
}






export default usersReducer;
