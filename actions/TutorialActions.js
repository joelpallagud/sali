import {
    FETCH_TUTORIAL_SUCCESS,
    FETCH_TUTORIAL_ERROR,
    TUTORIAL_VIEWED
} from './types';

function getTutorialSuccess(data){
    return {
	type: FETCH_TUTORIAL_SUCCESS,
	data
    }
}

export function setTutorialViewed(){
    return {
	type: TUTORIAL_VIEWED,
    }
}

function getTutorialFailure(){
    return {
	type: FETCH_TUTORIAL_FAILURE
    }
}
