const local = JSON.parse(localStorage.getItem("favoritesP")) || [];

const pokeFavReducer = (state = local, action) => {
  switch (action.type) {
    case "@poke/ADD":
      if (state.some((e) => e.name === action.char.name)) {
        return [...state];
      } else {
        return [...state, action.char];
      }

    case "@poke/REMOVE":
      return action.list;

    default:
      return state;
  }
};

export default pokeFavReducer;
