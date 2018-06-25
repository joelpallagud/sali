import {
    REGISTER_USER,
    CHOOSE_LANGUAGE,
    SIGNUP,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    birthday: '',
    phone: '',
    email: '',
    address: '',
    language: '',
    password: '',
    user: null,
    error: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CHOOSE_LANGUAGE:
            return { ...state, language: action.payload };
        case EMAIL_CHANGED: 
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED: 
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, password: '', loading: false };
	case SIGNUP: 
	    return { ...state, loading: true, error: '' };
	case SIGNUP_FAIL: 
	    return { ...state, error: action.payload, password: '', loading: false };
	case SIGNUP_SUCCESS:
	    return INITIAL_STATE;
	case LOGOUT: 
	    return {...state, loading: true}
	case LOGOUT_SUCCESS: 
	    return {...state,  ...INITIAL_STATE, loading: false}
	case LOGOUT_FAIL:
	    return {...state,error: action.payload, loading: false}
        default:
            return state;
    }
};
