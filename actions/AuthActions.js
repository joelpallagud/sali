import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

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
    LOGOUT_FAIL,
    FB_LOGIN_FAIL
} from './types';
import { NavigationActions } from 'react-navigation';
import firebase from '../api/firebase';
import { setDefaultDetails } from './ProfileActions';
import { FACEBOOK_APP_ID, FACEBOOK_PERMISSIONS } from '../api/constants';

export const registerUser = ({ prop, value }) => ({
        type: REGISTER_USER,
        payload: { prop, value }
    });

export const chooseLanguage = (language) => ({
        type: CHOOSE_LANGUAGE,
        payload: language
    });

export const loginUser = (email, password) => (dispatch) => {
    if (email && password) {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((err) => loginUserFail(dispatch, err));
    } else {
        loginUserFail(dispatch, { message: 'You must fill up all the inputs' });
    }
};

const loginUserFail = (dispatch, error) => {
    console.log('Login failed');
    console.log(error);
    dispatch({ type: LOGIN_USER_FAIL,
	payload: error
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user,
    });
    // dispatch( .navigate('UserCreate'));
};


export const fbLogin = () => async (dispatch) => {
    const token = await AsyncStorage.getItem('auth_token');

    if (token) {
        console.log('FB login success');
        fbFirebaseLogin(dispatch, token);
    } else {
        doFbLogin(dispatch);
    }
}

const doFbLogin = async (dispatch) => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, { 
        permissions: FACEBOOK_PERMISSIONS 
    });

    if (type === 'cancel') {
        console.log('FB login fail');
        return dispatch({ type: FB_LOGIN_FAIL });
    } else {
        console.log('do FB login success');
        fbFirebaseLogin(dispatch, token);  
        await AsyncStorage.setItem('auth_token', token);
    }
}

const fbFirebaseLogin = async (dispatch, token) => {
    const credential = await firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    firebase.auth().signInAndRetrieveDataWithCredential(credential)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((err) => loginUserFail(dispatch, err));
}

export const signUp = (email, password) => (dispatch) => {
	if (email && password) {
        dispatch({ type: SIGNUP });
        console.log('Signing in');
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => signupSuccess(dispatch, email, password))
            .catch((err) => signupFail(dispatch, err));
	} else {
        signupFail(dispatch, { message: 'You must fill up all the inputs' });
	}
    };

const signupFail = (dispatch, error) => {
    console.log('Signup failed');
    console.log(error);
    dispatch({ type: SIGNUP_FAIL, payload: error });
};

const signupSuccess = (dispatch, email, password) => {
    console.log('SignUp success');
    dispatch({ type: SIGNUP_SUCCESS });
    setDefaultDetails();
    dispatch(loginUser(email, password));
};

export const logout = () => (dispatch) => {
	dispatch({ type: LOGOUT });
    firebase.auth().signOut()
        .then(() => logoutSuccess(dispatch))
        .catch((err) => logoutFail(dispatch, err));
    };

const logoutSuccess = (dispatch) => {
    dispatch({ type: LOGOUT_SUCCESS });
    dispatch(NavigationActions.navigate('Home'));
};

const logoutFail = (dispatch, error) => {
    console.log('Logout failed');
    console.log(error);
    dispatch({ type: LOGOUT_FAIL, payload: error });
};
