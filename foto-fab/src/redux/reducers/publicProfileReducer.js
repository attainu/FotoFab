import {
  PUBLIC_PROFILE,
  TOGGLE_PUBLIC_PROFILE_FETCHING_STATE,
  PUBLIC_PHOTO,
  TOGGLE_PUBLIC_PHOTO_FETCHING_STATE,
<<<<<<< HEAD
  PUBLIC_USERS_LIKED_PHOTOS,
  TOGGLE_PUBLIC_USERS_LIKED_PHOTO_FETCHING_STATE,
  PUBLIC_USER_COLLECTION,
  TOGGLE_PUBLIC_USER_COLLECTION_FETCHING_STATE,
=======
>>>>>>> 56e6770b5f519ad58d2f74ba61b57c4479f58dec
} from "../actionType";

const initialState = {
  publicUser: null,
  isUserLoading: false,
  photos: null,
  isPhotosLoading: false,
<<<<<<< HEAD
  likedPhotos: null,
  isLikedPhotoLoading: false,
  collections: null,
  isCollectionLoading: false,
=======
>>>>>>> 56e6770b5f519ad58d2f74ba61b57c4479f58dec
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
<<<<<<< HEAD
    case PUBLIC_USERS_LIKED_PHOTOS: {
      return { ...state, likedPhotos: payload };
    }
    case TOGGLE_PUBLIC_USERS_LIKED_PHOTO_FETCHING_STATE: {
      return { ...state, isLikedPhotoLoading: !state.isLikedPhotoLoading };
    }
    case PUBLIC_USER_COLLECTION: {
      return { ...state, collections: payload };
    }
    case TOGGLE_PUBLIC_USER_COLLECTION_FETCHING_STATE: {
      return { ...state, isCollectionLoading: !state.isCollectionLoading };
    }
=======
>>>>>>> 56e6770b5f519ad58d2f74ba61b57c4479f58dec
    default: {
      return state;
    }
  }
};

export default publicUserReducer;
