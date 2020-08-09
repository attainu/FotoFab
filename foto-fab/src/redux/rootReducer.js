import { combineReducers } from "redux";
import photoReducer from "./reducers/fetchPhotosReducer";
import publicUserReducer from "./reducers/publicProfileReducer";
const rootReducer = combineReducers({
  photoState: photoReducer,
  publicUserState: publicUserReducer,
});

export default rootReducer;
