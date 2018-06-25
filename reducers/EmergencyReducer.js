import {
    BREATHING_CHOOSE,
    PULSE_CHOOSE,
    CONSCIOUS_CHOOSE
} from '../actions/types';

const INITIAL_STATE = {
    isBreathing: null,
    hasPulse: null,
    isConscious: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BREATHING_CHOOSE:
            return { ...state, isBreathing: action.payload };
        case PULSE_CHOOSE: 
            return { ...state, hasPulse: action.payload };
        case CONSCIOUS_CHOOSE: 
            return { ...state, isConscious: action.payload };       
        default:
            return state;
    }
};
