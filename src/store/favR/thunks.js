import { addFav, removeFav } from "./action";

export const addFavThunk = (char) => (dispatch, getState) => {
  let getFavRick = JSON.parse(localStorage.getItem("favoritesR")) || [];

  if (getFavRick.some((e) => e.name === char.name)) {
    return;
  } else {
    getFavRick.push(char);
    localStorage.setItem("favoritesR", JSON.stringify(getFavRick));
  }

  dispatch(addFav(char));
};

export const removeFavThunk = (name) => (dispatch, getState) => {
  let getFavRick = JSON.parse(localStorage.getItem("favoritesR")) || [];
  const list = getFavRick.filter((charInfo) => charInfo.name !== name);
  localStorage.setItem("favoritesR", JSON.stringify(list));
  dispatch(removeFav(list));

  // dispatch(removeFav(list));
};
