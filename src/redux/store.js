import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { userSlice, initValueUser } from "./reducers/userSlice";
import { friendsSlice, initValueFriends } from "./reducers/firenSlice";
import { proffesionSlice } from "./reducers/proffessionSlice";
import thunk from "redux-thunk";

// function logger(store) {
//     console.log("midle store", store)
//   return function (next) {
//     return function (action) {
//         console.log("midle action", action)
//         action.payload.name += "hi"
//         console.log("next", next)
//       return next(action);
//     };
//   };
// }

const store = createStore(
  combineReducers({
    currentUser: userSlice,
    friends: friendsSlice,
    proffession: proffesionSlice,
  }),
  {
    currentUser: initValueUser,
    friends: initValueFriends,
    proffession: "developer",
  },

//   applyMiddleware(logger)
    applyMiddleware(thunk)
);

export default store;
