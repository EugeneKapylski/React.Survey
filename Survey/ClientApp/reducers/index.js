import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import SurveysReducer from './surveysReducer';
import SurveyPassingsReducer from './surveyPassingsReducer';

const rootReducer = combineReducers({
    surveys: SurveysReducer,
    surveyPassings: SurveyPassingsReducer,
    form: formReducer
});

export default rootReducer;