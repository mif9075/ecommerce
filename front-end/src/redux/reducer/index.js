import { combineReducers } from "redux";
import authReducer from './authReducer';
import handleMessageReducer from './handleMessageReducer'
import cloudiReducer from './cloudiReducer'

export default combineReducers({
    authUser: authReducer,
    message: handleMessageReducer,
    cloudi: cloudiReducer
});
