import { AsyncStorage } from 'react-native';
import firebase from '../api/firebase';
import {
    USER_CREATE,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAILURE,
    USER_FETCH,
    USER_FETCH_SUCCESS,
	USER_FETCH_FAILURE,
	GET_LOCATION,
	SET_LOCATION,
	SET_LOCATION_SUCCESS,
	SET_LOCATION_FAILURE,
	ALLOW_LOCATION,
	ALLOW_LOCATION_SUCCESS,
	ALLOW_LOCATION_FAILURE
} from './types';

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

export const userFetch = (user) => {
    const uid = user.uid;
    const path = `/users/${uid}`;

    return (dispatch) => {
		dispatch({ type: USER_FETCH });
		firebase.database().ref(path)
			.once('value', snapshot => {
				dispatch({ 
					type: USER_FETCH_SUCCESS, 
					payload: snapshot.val() });
				})
    };
};

export const setDefaultDetails = () => {
    userCreate('', '', '', '');
};

export const getLocation = () => (dispatch) => {
	dispatch({
		type: GET_LOCATION,
	})
}

export const setLocation = (location) => (dispatch) => {
    if (location) { 
		const uid = firebase.auth().currentUser.uid;
		const path = `/users/${uid}`;
		
		dispatch({ type: SET_LOCATION });

		firebase.database().ref(path)
			.update(location)
			.then(() => {
				setLocationSuccess(dispatch, location);
			})
			.catch((err) => {
				setLocationFailure(dispatch, err);
			});
    } else {
		setLocationFailure(dispatch, 'Location not found');
    }
};

const setLocationSuccess = (dispatch, location) => {
    console.log('Set Location Success');
    dispatch({
		type: SET_LOCATION_SUCCESS,
		payload: location
    });
};

const setLocationFailure = (dispatch, error) => {
    console.log('Set Location Failure');
    console.log(error);
    dispatch({
		type: SET_LOCATION_FAILURE,
		payload: error
    });
};

export const allowsLocation = (allowLocation) => {
	const uid = firebase.auth().currentUser.uid;
	const path = `/users/${uid}`;
	const string = allowLocation.allowLocation.toString();
	
	return (dispatch) => {
		dispatch({ type: ALLOW_LOCATION })

		firebase.database().ref(path)
			.update(allowLocation)
			.then(() => {
				allowsLocationSuccess(dispatch, allowLocation.allowLocation);
				AsyncStorage.setItem('allow location', string)
			})
			.catch((err) => {
				allowsLocationFailure(dispatch, "Can't find location permissions");
			});
	};
}

const allowsLocationSuccess = (dispatch, allowLocation) => {
    console.log('Allows Location Success');
    dispatch({
		type: ALLOW_LOCATION_SUCCESS,
		payload: allowLocation
    });
};

const allowsLocationFailure = (dispatch, error) => {
    console.log('Allows Location Failure');
    console.log(error);
    dispatch({
		type: ALLOW_LOCATION_FAILURE,
		payload: error
    });
};