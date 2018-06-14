import { combineReducers } from "redux";
import SurveysReducer from "./surveysReducer";

const rootReducer = combineReducers({
  surveys: SurveysReducer
});

export default rootReducer;