import axios from 'axios';
import { FETCH_SURVEYS, FETCH_SURVEY, DELETE_SURVEY } from '../constants/actionTypes';

const ROOT_URL = 'http://localhost:61876/api';
const SURVEYS_ENDPOINT_URL = `${ROOT_URL}/surveys`;

export function fetchSurveys() {
  const request = axios.get(SURVEYS_ENDPOINT_URL);

  return {
    type: FETCH_SURVEYS,
    payload: request
  };
}

export function fetchSurvey(id) {
  const request = axios.get(`${SURVEYS_ENDPOINT_URL}/${id}`);

  return {
    type: FETCH_SURVEY,
    payload: request
  };
}

export function deleteSurvey(id, callback) {
  const request = axios
    .delete(`${SURVEYS_ENDPOINT_URL}/${id}`)
    .then(() => callback());

  return {
    type: DELETE_SURVEY,
    payload: id
  };
}