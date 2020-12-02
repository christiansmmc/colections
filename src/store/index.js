import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import favR from "./favR/reducer";
import favP from "./favP/reducer";

const reducers = combineReducers({
  rick: favR,
  pokemon: favP,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
