import { FETCH_SURVEY_PASSINGS } from 'Constants/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_SURVEY_PASSINGS:
            return action.payload.data;
        default:
            return state;
    }
}