import { combineReducers } from "redux";
import friendList from "./reducer";

const rootReducer = combineReducers({
  friends: friendList
});

export default rootReducer;
