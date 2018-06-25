import firebase from '../firebase';
import {
    USER_CREATE,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAILURE,
    USER_FETCH,
    USER_FETCH_SUCCESS,
	USER_FETCH_FAILURE,
	SET_LOCATION,
	SET_LOCATION_SUCCESS,
	SET_LOCATION_FAILURE
} from './types';
// import { NavigationActions } from 'react-navigation';

export const userCreate = (name, birthday, phone, address) => (dispatch) => {
    if (name && birthday && phone && address) { 
		const uid = firebase.auth().currentUser.uid;
		const path = `/users/${uid}`;
		
		dispatch({ type: USER_CREATE });

		firebase.database().ref(path)
			.set({ name, birthday, phone, address })
			.then(() => {
				dispatch({ type: USER_CREATE_SUCCESS });
			})
			.catch((err) => {
				userCreateFailure(dispatch, err);
			});
    } else {
		userCreateFailure(dispatch, 'You must fill out all the fields');
    }
};

const userCreateFailure = (dispatch, error) => {
    console.log('User create fail');
    console.log(error);
    dispatch({
		type: USER_CREATE_FAILURE,
		payload: error
    });
};

export const userFetch = () => {
    const uid = firebase.auth().currentUser.uid;
    const path = `/users/${uid}`;

    return (dispatch) => {
		dispatch({ type: USER_FETCH });
		firebase.database().ref(path)
			.on('value', snapshot => {
				dispatch({ type: USER_FETCH_SUCCESS, 
					payload: snapshot.val() });
				})
			.catch((err) => {
				dispatch({ type: USER_FETCH_FAILURE, payload: err });
			});
    };
};

export const setDefaultDetails = () => {
    userCreate('', '', '', '');
};

export const setLocation = (location) => (dispatch) => {
    if (location) { 
		const uid = firebase.auth().currentUser.uid;
		const path = `/users/${uid}`;
		
		dispatch({ type: SET_LOCATION });

		firebase.database().ref(path)
			.update(location)
			.then(() => {
				dispatch({ type: SET_LOCATION_SUCCESS });
			})
			.catch((err) => {
				setLocationFailure(dispatch, err);
			});
    } else {
		setLocationFailure(dispatch, 'Location not found');
    }
};

const setLocationFailure = (dispatch, error) => {
    console.log('Set Location Failure');
    console.log(error);
    dispatch({
		type: SET_LOCATION_FAILURE,
		payload: error
    });
};

