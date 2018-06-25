import { combineReducers } from 'redux';
import { firebaseStateReducer as firebase } from 'react-redux-firebase';

import AuthReducer from './AuthReducer';
import TextReducer from './TextReducer';
// import NavReducer from './NavReducer';
import HotlineReducer from './HotlineReducer';
import TutorialReducer from './TutorialReducer';
import SubtitleReducer from './SubtitleReducer';
import ProfileReducer from './ProfileReducer';
import EmergencyReducer from './EmergencyReducer';

export default combineReducers({
    auth: AuthReducer,
    text: TextReducer,
    // nav: NavReducer,
    tutorial: TutorialReducer,
    firebase,
    hotlines: HotlineReducer,
    subtitles: SubtitleReducer,
    user: null,
    profile: ProfileReducer,
    emergency: EmergencyReducer
});
