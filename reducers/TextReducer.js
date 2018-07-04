import { PERSIST_REHYDRATE } from 'redux-persist/lib/constants';
import {
    SHOW_LANGUAGE
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PERSIST_REHYDRATE:
            return action.payload.text || [];
        case SHOW_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
};
