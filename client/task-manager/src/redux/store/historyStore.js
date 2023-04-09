import { createStore, applyMiddleware } from "redux";
import historyReducer from "../reducers/historyReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
const store = createStore(
  historyReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
