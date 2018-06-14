import axios from 'axios';
import { FETCH_SURVEYS } from '../constants/actionTypes';

const ROOT_URL = 'http://localhost:61876/api';

export function fetchSurveys() {
  const request = axios.get(`${ROOT_URL}/surveys`);

  return {
    type: FETCH_SURVEYS,
    payload: request
  };
}
