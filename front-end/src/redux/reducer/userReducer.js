import {
  USER_SIGNEDIN,
  USER_SIGNOUT
  // USER_REFRESH,
  // USER_UPDATE
} from "../actionTypes";

const intitailState = {};

export default function(state = intitailState, action) {
  switch (action.type) {
    case USER_SIGNEDIN:
      return action.payload;
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
}
