import {
  LOG_IN,
  REGISTER,
  LOGOUT,
  TOGGLE_AUTH_STATE,
  UNSPLASH_LOGIN,
  SET_USER_PROFILE,
  LIKE_PHOTO,
} from "../actionType";

const initialState = {
  accessTokenData: JSON.parse(localStorage.getItem("accessTokenData")) || null,
  userProfile: JSON.parse(localStorage.getItem("userProfile")) || null,
};

const userReducer = (state = initialState, action) => {
  // let updatedLikes;
  // let updatedPhotoIndex;
  const { type, payload } = action;
  switch (type) {
    case LOGOUT:
      localStorage.removeItem("accessTokenData");
      localStorage.removeItem("userProfile");
      localStorage.removeItem("localLikes");
      return { ...state, accessTokenData: null, userProfile: null };

    case UNSPLASH_LOGIN:
      const userJSON = JSON.stringify(payload);
      localStorage.setItem("accessTokenData", userJSON);
      return { ...state, accessTokenData: [payload] };

    case SET_USER_PROFILE:
      const userProfileJSON = JSON.stringify(payload);
      localStorage.setItem("userProfile", userProfileJSON);
      return { ...state, userProfile: payload };

    default:
      return state;
  }
};

export default userReducer;
