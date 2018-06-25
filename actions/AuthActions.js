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
} from './types';
import { NavigationActions } from 'react-navigation';
import firebase from '../firebase';
// import api from '../api';
import { setDefaultDetails } from './ProfileActions';

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
    // dispatch(NavigationActions.navigate('UserCreate'));
};

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

// export const signUp = (number) => {
//     const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//         'size': 'invisible',
//         'callback': function(response) {
//           onSignInSubmit();
//         }
//       });
//     const phoneNumber = number;
//     return (dispatch) => {
//         dispatch({ type: SIGNUP});
// 	    console.log("Signing in");
// 	    firebase.auth().signInWithPhoneNumber(phoneNumber)
//             .then(function (confirmationResult) {
//             // SMS sent. Prompt user to type the code from the message, then sign the
//             // user in with confirmationResult.confirm(code).
//             //   window.confirmationResult = confirmationResult;
//             }).catch(function (error) {
//             // Error; SMS not sent
//             // ...
//         });
//     }
// }

// export function signInWithFacebook(facebookToken, successCB, errorCB) {
//     return (dispatch) => {
//         api.signInWithFacebook(facebookToken, (success, data, error) => {
//             if (success) {
//                 if (data.exists) dispatch({ type: t.LOGGED_IN, data: data.user });
//                 successCB(data);
//             } else if (error) errorCB(error);
//         });
//     };
// }

const signupFail = (dispatch, error) => {
    console.log('Signup failed');
    console.log(error);
    dispatch({ type: SIGNUP_FAIL, 
	payload: error 
    });
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
