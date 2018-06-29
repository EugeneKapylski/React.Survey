import _ from 'lodash';
import { FETCH_SURVEYS, FETCH_SURVEY, DELETE_SURVEY } from 'Constants/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_SURVEYS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_SURVEY:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_SURVEY:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}