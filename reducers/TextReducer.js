import {
    SHOW_LANGUAGE
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
};
