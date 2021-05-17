import { combineReducers, createStore } from "redux";
import counterReducer from "./feature/counter";

const reducer = combineReducers({
  counter: counterReducer,
});

const appStore = createStore(reducer);

export default appStore;
