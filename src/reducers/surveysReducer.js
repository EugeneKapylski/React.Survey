import _ from "lodash";
import { FETCH_SURVEYS } from "../constants/actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}