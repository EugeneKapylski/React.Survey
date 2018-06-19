import { combineReducers } from 'redux';
import SurveysReducer from './surveysReducer';
import SurveyPassingsReducer from './surveyPassingsReducer';

const rootReducer = combineReducers({
    surveys: SurveysReducer,
    surveyPassings: SurveyPassingsReducer
});

export default rootReducer;