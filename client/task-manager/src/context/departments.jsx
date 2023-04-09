import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  EnglishDepartment,
  QCDepartment,
  MediaDepartment,
  coursesReducer,
} from "./departmants";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
  EnglishDepartment,
  QCDepartment,
  MediaDepartment,
  coursesReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
