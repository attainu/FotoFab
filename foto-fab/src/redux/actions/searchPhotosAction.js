import axios from "axios";
import {
  DEL_PHOTOS,
  SET_SEARCHED_PHOTO,
  TOGGLE_SEARCHED_PHOTO_FETCHING_STATE,
} from "../actionType";
import { key } from "../../config";

export const emptyImages = () => async (dispatch) => {
  dispatch({ type: DEL_PHOTOS, payload: null });
};

export const searchImages = (page_no, searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: TOGGLE_SEARCHED_PHOTO_FETCHING_STATE });
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page_no}&query=${searchQuery}&client_id=${key.ACCESS_KEY}`
    );
    console.log(data);
    dispatch({ type: SET_SEARCHED_PHOTO, payload: data.results });
  } catch (err) {
    console.error(err.message);
  } finally {
    dispatch({ type: TOGGLE_SEARCHED_PHOTO_FETCHING_STATE });
  }
};
