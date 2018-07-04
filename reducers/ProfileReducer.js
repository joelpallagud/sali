import { PERSIST_REHYDRATE } from 'redux-persist/lib/constants';
import {
    USER_CREATE,
    USER_CREATE_SUCCESS,
    USER_FETCH,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAILURE,
	USER_CREATE_FAILURE,
	GET_LOCATION,
	SET_LOCATION,
	SET_LOCATION_SUCCESS,
	SET_LOCATION_FAILURE,
	ALLOW_LOCATION,
	ALLOW_LOCATION_SUCCESS,
	ALLOW_LOCATION_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    error: '',
    data: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
	case PERSIST_REHYDRATE:
    	return action.payload.profile || [];	
	case USER_CREATE:
		return { ...state, loading: true };
	case USER_CREATE_SUCCESS:
		return { ...state, data: action.payload, loading: false };  
	case USER_CREATE_FAILURE:
		return { ...state, error: action.payload, loading: false };
	case USER_FETCH:
		return { ...state, loading: true };
	case USER_FETCH_SUCCESS:
		return { ...state, data: action.payload, loading: false };
	case USER_FETCH_FAILURE:
		return { ...state, error: action.payload, loading: false };
	case GET_LOCATION:
		return { ...state, loading: true };
	case SET_LOCATION:
		return { ...state, loading: true };
	case SET_LOCATION_SUCCESS:
		return { ...state, location: action.payload, loading: false };
	case SET_LOCATION_FAILURE:
		return { ...state, error: action.payload, loading: false };
	case ALLOW_LOCATION:
		return { ...state, loading: true };
	case ALLOW_LOCATION_SUCCESS:
		return { ...state, allowLocation: action.payload, loading: false };
	case ALLOW_LOCATION_FAILURE:
		return { ...state, error: action.payload, loading: false };
	default:
		return state;
    }
};
