import {
    SHOW_HOTLINES,
    GET_HOTLINE
} from './types';
import hotlines from '../data/hotlines';

export const showHotlines= (location) => {
    return (dispatch) => {
        switch (location) {
            case 'Quezon City':
                dispatch ({
                    type: SHOW_HOTLINES,
                    payload: hotlines.quezon_city,
                });
                break;
            case 'Lungsod Quezon':
                dispatch ({
                    type: SHOW_HOTLINES,
                    payload: hotlines.quezon_city,
                });
                break;
	        default:
                dispatch ({
                    type: SHOW_HOTLINES,
                    payload: hotlines.metro_manila, 
                });
		break;
            
        }
    }
    
};

export const getHotline = (location) => {
    return {
	type: GET_HOTLINE,
	payload: location
    }

};
