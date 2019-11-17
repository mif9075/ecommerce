import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { setAuthSuccessUser, logout } from "../redux/action/authUserAction";
import { getUser } from "../redux/action/userAction";

const checkTokenAuth = store => {
  let jwtToken = localStorage.getItem("jwtToken");

  let decoded;
  if (jwtToken) {
    setAuthToken(jwtToken);
    decoded = jwt_decode(jwtToken);
    store.dispatch(setAuthSuccessUser(jwtToken));
    store.dispatch(getUser(decoded.email));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/signin";
    }
  }
};

export default checkTokenAuth;
