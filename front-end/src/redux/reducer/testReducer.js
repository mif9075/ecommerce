import { TEST, TWO } from "../actionTypes";

const initialState = {
  test: "This is redux test"
};
export default function(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return state;
    case TWO:
        return {
            test2: "we got it"
        }
    default:
      return state;
  }
}
