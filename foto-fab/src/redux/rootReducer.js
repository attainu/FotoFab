import { combineReducers } from "redux";
import photoReducer from "./reducers/fetchPhotosReducer";
const rootReducer = combineReducers({
  photoState: photoReducer,
});

export default rootReducer;
