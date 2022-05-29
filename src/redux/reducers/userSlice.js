import { userAPI } from "../userApi";

export const userSlice = (state = {}, action) => {
  switch (action.type) {
    case "edit-use-name":
      return {
        ...state,
        name: action.payload.name,
      };

    default:
      return state;
  }
};
export const initValueUser = {
  name: "Suren",
  surname: "galstyen",
};

export const iditName = (newName) => {
  return {
    type: "edit-use-name",
    payload: { name: newName },
  };
};

// action creator thunk

export function loadUser() {
  return (dispatch, getState) => {
    return userAPI().then((loadingUser) => {
      dispatch(iditName(loadingUser.name));
    });
    // return dispatch(iditName("Telman Galstyan"))  
  };
}
