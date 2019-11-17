import { SUBMIT_SEARCH, ERROR_SEARCH } from "../actionTypes";
import Axios from "../../lib/Axios";

export const submitSearch = searchTerm => async dispatch => {
  try {
    const search = { search: searchTerm.searchInput };
    let success = await Axios.post("users/search", search);

    dispatch({
      type: SUBMIT_SEARCH,
      payload: success.data
    });
    return Promise.resolve(success.data);
  } catch (error) {
    console.log(error);
    dispatch(errorSearch(error));
    return Promise.reject(error);
  }
};

const errorSearch = message => dispatch => {
  dispatch({
    type: ERROR_SEARCH,
    payload: message
  });
};
