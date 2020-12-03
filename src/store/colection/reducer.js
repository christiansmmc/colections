import { ADD_PAGE } from "./actionTypes";

const colectionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PAGE:
      return action.page;
    default:
      return state;
  }
};

export default colectionReducer;
