import {
  AUTH_USER_SUCCESSFUL,
  AUTH_USER_LOGOUT,
  AUTH_SIGNUP_SUCCESSFUL,
  AUTH_USER_FAILURE
} from "../actionTypes";
import Axios from "../../lib/Axios";
import setAuthToken from "../../lib/setAuthToken";

const signin = userInfo => async dispatch => {
  try {
    let success = await Axios.post("./users/sign-in", userInfo);
    const { token } = success.data;
    dispatch(setAuthSuccessUser(token));
    setAuthToken(token);
    localStorage.setItem("jwtToken", token);
    return Promise.resolve("Signin Successful!");
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

const signup = userInfo => async dispatch => {
  try {
    let success = await Axios.post("./users/sign-up", userInfo);
    dispatch(handleSignupSuccess(success.data.message));
    return Promise.resolve(success.data.message);
  } catch (error) {
    return Promise.reject(error);
  }
};

const handleSignupSuccess = message => dispatch => {
  dispatch({
    type: AUTH_SIGNUP_SUCCESSFUL,
    payload: message
  });
};

const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch({
    type: AUTH_USER_LOGOUT
  });
};

const setAuthSuccessUser = token => dispatch => {
  dispatch({
    type: AUTH_USER_SUCCESSFUL,
    payload: token
  });
};

const handleSignupError = message => dispatch => {
  dispatch({
    type: AUTH_USER_FAILURE,
    payload: message
  });
};

export { signin, signup, logout, setAuthSuccessUser, handleSignupError };
