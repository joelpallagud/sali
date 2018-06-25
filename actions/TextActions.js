import {
    SHOW_LANGUAGE
} from './types';
import strings from '../data/strings';

export const showLanguage = (language) => {
    return (dispatch) => {
        switch (language) {
            case 'English':
                dispatch ({
                    type: SHOW_LANGUAGE,
                    payload: strings.english
                });
                break;
            case 'Tagalog':
                dispatch ({
                    type: SHOW_LANGUAGE,
                    payload: strings.tagalog
                });
            
        }
    }
    
};
