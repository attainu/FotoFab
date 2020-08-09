import {
  PUBLIC_PROFILE,
  PUBLIC_PHOTO,
  TOGGLE_PUBLIC_PROFILE_FETCHING_STATE,
  TOGGLE_PUBLIC_PHOTO_FETCHING_STATE,
} from "../actionType";
import axios from "axios";
import { key } from "../../config";

export const fetchPublicUser = (username) => async (dispatch) => {
  try {
    dispatch({ type: PUBLIC_PROFILE, payload: null });
    dispatch({ type: TOGGLE_PUBLIC_PROFILE_FETCHING_STATE });
    const { data } = await axios.get(
      `https://api.unsplash.com/users/${username}/?client_id=${key.ACCESS_KEY}`
    );
    console.log(data);
    dispatch({ type: PUBLIC_PROFILE, payload: data });
  } catch (err) {
    console.error(err.message);
  } finally {
    dispatch({ type: TOGGLE_PUBLIC_PROFILE_FETCHING_STATE });
  }
};

//fetch public user's photos
export const fetchPublicUserPhotos = (username) => async (dispatch) => {
  try {
    dispatch({ type: PUBLIC_PHOTO, payload: null });
    dispatch({ type: TOGGLE_PUBLIC_PHOTO_FETCHING_STATE });
    const { data } = await axios.get(
      `https://api.unsplash.com/users/${username}/photos?client_id=${key.ACCESS_KEY}`
    );
    console.log(data);
    dispatch({ type: PUBLIC_PHOTO, payload: data });
  } catch (err) {
    console.error(err.message);
  } finally {
    dispatch({ type: TOGGLE_PUBLIC_PHOTO_FETCHING_STATE });
  }
};
