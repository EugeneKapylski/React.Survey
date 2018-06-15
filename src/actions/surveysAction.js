import axios from 'axios';
import { FETCH_SURVEYS, FETCH_SURVEY, DELETE_SURVEY } from '../constants/actionTypes';
import endpoints from '../constants/endpoints';

export function fetchSurveys() {
  const request = axios.get(endpoints.surveys);

  return {
    type: FETCH_SURVEYS,
    payload: request
  };
}

export function fetchSurvey(id) {
  const request = axios.get(`${endpoints.surveys}/${id}`);

  return {
    type: FETCH_SURVEY,
    payload: request
  };
}

export function deleteSurvey(id, callback) {
  const request = axios
    .delete(`${endpoints.surveys}/${id}`)
    .then(() => callback());

  return {
    type: DELETE_SURVEY,
    payload: id
  };
}