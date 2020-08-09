import {
  PUBLIC_PROFILE,
  TOGGLE_PUBLIC_PROFILE_FETCHING_STATE,
  PUBLIC_PHOTO,
  TOGGLE_PUBLIC_PHOTO_FETCHING_STATE,
} from "../actionType";

const initialState = {
  publicUser: null,
  isUserLoading: false,
  photos: null,
  isPhotosLoading: false,
};

export const publicUserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PUBLIC_PROFILE: {
      return { ...state, publicUser: payload };
    }
    case TOGGLE_PUBLIC_PROFILE_FETCHING_STATE: {
      return { ...state, isUserLoading: !state.isUserLoading };
    }
    case PUBLIC_PHOTO: {
      return { ...state, photos: payload };
    }
    case TOGGLE_PUBLIC_PHOTO_FETCHING_STATE: {
      return { ...state, isPhotosLoading: !state.isPhotosLoading };
    }
    default: {
      return state;
    }
  }
};

export default publicUserReducer;
