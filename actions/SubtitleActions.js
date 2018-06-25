import {
    SHOW_SUBTITLES,
    CHOOSE_SUBTITLES
} from './types';
import subtitles from '../data/subs/subtitles';

export const showSubtitles = (page, language) => (dispatch) => {
	switch (language) {
	    case 'English':
			switch (page) {
			    case 'Call':
				dispatch({
				    type: SHOW_SUBTITLES,
				    payload: subtitles.english.call,
				});
				break;
			    case 'Survey':
				dispatch({
				    type: SHOW_SUBTITLES,
				    payload: subtitles.english.survey,
				});
				break;
			    case 'Check':
				dispatch({
				    type: SHOW_SUBTITLES,
				    payload: subtitles.english.check,
				});
				break;
			    case 'Compress':
				dispatch({
				    type: SHOW_SUBTITLES,
				    payload: subtitles.english.compressions,
				});
				break;
			    default:
				console.log('default');
				dispatch({
				    type: SHOW_SUBTITLES,
				    payload: subtitles.english, 
				});
				break;
			    break;
			    }
	    case 'Tagalog':
		switch (page) {
				case 'Call':
				dispatch({
					type: SHOW_SUBTITLES,
					payload: subtitles.tagalog.call,
				});
				break;
				case 'Survey':
				dispatch({
					type: SHOW_SUBTITLES,
					payload: subtitles.tagalog.survey,
				});
				break;
				case 'Check':
				dispatch({
					type: SHOW_SUBTITLES,
					payload: subtitles.tagalog.check,
				});
				break;
				case 'Compress':
				dispatch({
					type: SHOW_SUBTITLES,
					payload: subtitles.tagalog.compressions,
				});
				break;
				default:
				dispatch({
					type: SHOW_SUBTITLES,
					payload: subtitles.tagalog, 
				});
				break;
				break;
			}
	}
    };

export const chooseSubtitles = (page, language) => ({
	type: CHOOSE_SUBTITLES,
	payload: page,
		language,
    });
