import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';

import AuthReducer from './AuthReducer';
import TextReducer from './TextReducer';
import HotlineReducer from './HotlineReducer';
import TutorialReducer from './TutorialReducer';
import SubtitleReducer from './SubtitleReducer';
import ProfileReducer from './ProfileReducer';

export default ({
    auth: AuthReducer,
    text: TextReducer,
    tutorial: TutorialReducer,
    firebase,
    hotlines: HotlineReducer,
    subtitles: SubtitleReducer,
    user: null,
    profile: ProfileReducer
});
