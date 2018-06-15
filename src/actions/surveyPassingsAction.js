import axios from 'axios';
import { FETCH_SURVEY_PASSINGS } from '../constants/actionTypes';
import endpoints from '../constants/endpoints';

export function fetchSurveyPassings(id) {
  const request = axios.get(`${endpoints.surveyPassings}/${id}`);

  return {
    type: FETCH_SURVEY_PASSINGS,
    payload: request
  };
}