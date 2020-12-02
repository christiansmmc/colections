const local = JSON.parse(localStorage.getItem("favoritesR")) || [];

const favReducer = (state = local, action) => {
  switch (action.type) {
    case "@char/ADD":
      if (state.some((e) => e.name === action.char.name)) {
        return [...state];
      } else {
        return [...state, action.char];
      }

    case "@char/REMOVE":
      return action.list;

    default:
      return state;
  }
};

export default favReducer;
