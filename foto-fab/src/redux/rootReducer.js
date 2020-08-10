import { combineReducers } from "redux";
import photoReducer from "./reducers/fetchPhotosReducer";
import publicUserReducer from "./reducers/publicProfileReducer";
import randomPhotoReducer from "./reducers/randomPhotoReducer";
const rootReducer = combineReducers({
  photoState: photoReducer,
  publicUserState: publicUserReducer,
  randomPhotoState: randomPhotoReducer,
});

export default rootReducer;
