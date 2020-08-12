import {
  FETCH_A_PHOTO,
  TOGGLE_SINGLE_PHOTO_FETCHING_STATE,
} from "../actionType";

const initialState = {
  photo: null,
  isPhotoLoading: false,
};
export const detailPhotoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_A_PHOTO:
      return {
        ...state,
        photo: payload,
      };
    case TOGGLE_SINGLE_PHOTO_FETCHING_STATE:
      return {
        ...state,
        isPhotoLoading: !state.isPhotoLoading,
      };
    default:
      return state;
  }
};
