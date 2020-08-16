import {
  SET_SEARCHED_PHOTO,
  DEL_PHOTOS,
  TOGGLE_SEARCHED_PHOTO_FETCHING_STATE,
} from "../actionType";

const initialState = {
  photos: [],
  isPhotoLoading: false,
};

export const searchPhotosReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCHED_PHOTO: {
      console.log(payload);
      return { ...state, photos: [...state.photos, ...payload] };
    }
    case TOGGLE_SEARCHED_PHOTO_FETCHING_STATE: {
      return { ...state, isPhotoLoading: !state.isPhotoLoading };
    }
    case DEL_PHOTOS: {
      return { ...state, photos: [] };
    }
    default: {
      return state;
    }
  }
};

export default searchPhotosReducer;
