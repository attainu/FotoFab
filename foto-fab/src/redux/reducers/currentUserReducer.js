import {
  CURRENT_USERS_LIKED_PHOTOS,
  TOGGLE_CURRENT_USERS_LIKED_PHOTO_FETCHING_STATE,
  CURRENT_USER_COLLECTION,
  TOGGLE_CURRENT_USER_COLLECTION_FETCHING_STATE,
  DEL_PHOTOS,
  LIKE_PHOTO,
  UNLIKE_PHOTO,
  DATA_FETCHED,
} from "../actionType";

const initialState = {
  likedPhotos: [],
  isLikedPhotoLoading: false,
  collections: [],
  isCollectionLoading: false,
  localLikes: JSON.parse(localStorage.getItem("localLikes")) || [],
  dataFetched: false,
};

const currentUserReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CURRENT_USERS_LIKED_PHOTOS: {
      return { ...state, likedPhotos: payload };
    }
    case TOGGLE_CURRENT_USERS_LIKED_PHOTO_FETCHING_STATE: {
      return { ...state, isLikedPhotoLoading: !state.isLikedPhotoLoading };
    }
    case CURRENT_USER_COLLECTION: {
      return { ...state, collections: payload };
    }
    case TOGGLE_CURRENT_USER_COLLECTION_FETCHING_STATE: {
      return { ...state, isCollectionLoading: !state.isCollectionLoading };
    }

    case DEL_PHOTOS:
      return {
        ...state,
        likedPhotos: [],
      };

    case LIKE_PHOTO:
      let updatedPhoto = [...state.localLikes];
      updatedPhoto.push({ ...payload });
      const likeJSON = JSON.stringify(updatedPhoto);
      localStorage.setItem("localLikes", likeJSON);
      return { ...state, localLikes: updatedPhoto };

    case DATA_FETCHED:
      if (state.likedPhotos.length > 0) {
        console.log(state.likedPhotos);
        return { ...state, dataFetched: true };
      }
      return {
        ...state,
        dataFetched: false,
      };
    case UNLIKE_PHOTO:
      let newUpdate = state.localLikes.filter(
        (item) => item.id !== action.payload
      );
      let newArray = JSON.stringify(newUpdate);
      localStorage.localLikes = newArray;
      return {
        ...state,
        localLikes: newUpdate,
      };
    default: {
      return state;
    }
  }
};

export default currentUserReducer;
