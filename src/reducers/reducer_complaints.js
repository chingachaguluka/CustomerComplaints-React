import { FETCH_COMPLAINTS } from '../actions/index';

const INITIAL_STATE = { all: [], complaint: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_COMPLAINTS: 
            return { ...state, all: action.payload.data};
        default:
            return state;

    }
}
