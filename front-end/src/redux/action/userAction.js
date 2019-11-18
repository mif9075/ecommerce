import {
  USER_SIGNEDIN
  // USER_SIGNOUT,
  // USER_REFRESH,
  // USER_UPDATE
} from "../actionTypes";
import Axios from "../../lib/Axios";

const getUser = email => async dispatch => {
  try {
    let response = await Axios.post("./users/get-user", { email: email });
    dispatch({
      type: USER_SIGNEDIN,
      payload: response.data
    });
    return Promise.resolve("Got User");
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
  // let decodedToken = jwtDecoded(token);
  // dispatch({
  //   type: USER_SIGNEDIN,
  //   payload: decodedToken
  // });
  // console.log(userInfo);
};

export { getUser };
