import { addFavPoke, removeFavPoke } from "./action";

export const addPokeThunk = (char) => (dispatch, getState) => {
  let getFavPoke = JSON.parse(localStorage.getItem("favoritesP")) || [];

  if (getFavPoke.some((e) => e.name === char.name)) {
    return;
  } else {
    getFavPoke.push(char);
    localStorage.setItem("favoritesP", JSON.stringify(getFavPoke));
  }

  dispatch(addFavPoke(char));
};

export const RemovePokeThunk = (name) => (dispatch, getState) => {
  let getFavPoke = JSON.parse(localStorage.getItem("favoritesP")) || [];
  const list = getFavPoke.filter((charInfo) => charInfo.name !== name);
  localStorage.setItem("favoritesP", JSON.stringify(list));

  dispatch(removeFavPoke(list));
};
