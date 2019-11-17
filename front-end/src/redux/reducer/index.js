import { combineReducers } from "redux";
import authReducer from "./authReducer";
import handleMessageReducer from "./handleMessageReducer";
import cloudiReducer from "./cloudiReducer";
import albumReducer from "./albumReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

export default combineReducers({
  authUser: authReducer,
  message: handleMessageReducer,
  user: userReducer,
  cloudi: cloudiReducer,
  album: albumReducer,
  search: searchReducer
});
