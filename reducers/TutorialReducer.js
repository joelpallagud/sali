import {
    FETCH_TUTORIAL_SUCCESS,
    FETCH_TUTORIAL_ERROR,
    TUTORIAL_VIEWED
} from '../actions/types';

const INITIAL_STATE = {
    viewed: false,
    error: false, 
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
	case FETCH_TUTORIAL_SUCCESS:
		return {
			...state,
			viewed: data.viewed
		};
	case FETCH_TUTORIAL_ERROR:
		return {
			...state,
			error: true,
		};
	case TUTORIAL_VIEWED:
		return {
			...state,
			viewed: true,
		};
	default:
		return state;
    }
};

