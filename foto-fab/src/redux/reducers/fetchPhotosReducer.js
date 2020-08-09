import { SET_PHOTOS, TOGGLE_PHOTO_FETCHING_STATE } from "../actionType";

const initialState = {
  photos: null,
  isPhotoLoading: false,
};

export const photoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PHOTOS: {
      return { ...state, photos: payload };
    }
    case TOGGLE_PHOTO_FETCHING_STATE: {
      return { ...state, isPhotoLoading: !state.isPhotoLoading };
    }
    default: {
      return state;
    }
  }
};

export default photoReducer;
