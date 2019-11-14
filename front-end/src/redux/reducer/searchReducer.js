import { SUBMIT_SEARCH } from "../actionTypes";
const initialState = {
  searchResults: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return {
        searchResults: action.payload
      };
    default:
      return state;
  }
}
