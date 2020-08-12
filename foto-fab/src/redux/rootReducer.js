import { combineReducers } from "redux";
import photoReducer from "./reducers/fetchPhotosReducer";
import publicUserReducer from "./reducers/publicProfileReducer";
import randomPhotoReducer from "./reducers/randomPhotoReducer";
import searchPhotosReducer from "./reducers/searchPhotosReducer";
import { collectionReducer } from "./reducers/collectionPhotosReducer";
import { detailPhotoReducer } from "./reducers/detailPhotoReducer";
const rootReducer = combineReducers({
  photoState: photoReducer,
  publicUserState: publicUserReducer,
  randomPhotoState: randomPhotoReducer,
  searchPhotoState: searchPhotosReducer,
  collectionPhotos: collectionReducer,
  detailPhoto: detailPhotoReducer,
});

export default rootReducer;
