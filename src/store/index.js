import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import favR from "./favR/reducer";
import favP from "./favP/reducer";
import colection from "./colection/reducer";
import colectionRick from "./colectionRick/reducer";

const reducers = combineReducers({
  rick: favR,
  pokemon: favP,
  colection: colection,
  colectionRick: colectionRick,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
