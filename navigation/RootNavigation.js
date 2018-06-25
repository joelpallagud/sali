import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import SigninScreen from '../screens/Auth/SigninScreen';
import UserInfoScreen from '../screens/Auth/UserInfoScreen';
import PostRegistrationScreen from '../screens/Auth/PostRegistrationScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import ProfileScreen from '../screens/static/ProfileScreen';
import PracticeScreen from '../screens/static/PracticeScreen';

import SurveyScreen from '../screens/handsonly/SurveyScreen';
import CheckScreen from '../screens/handsonly/CheckScreen';
import CallScreen from '../screens/handsonly/CallScreen';
import CompressScreen from '../screens/handsonly/CompressScreen';
import AmbulanceScreen from '../screens/AmbulanceScreen';

import ChildScreen from '../screens/cpr/ChildScreen';
import DrowningScreen from '../screens/cpr/DrowningScreen';
import CPRSurveyScreen from '../screens/cpr/CPRSurveyScreen';
import CPRCallScreen from '../screens/cpr/CPRCallScreen';
import ConsciousCheckScreen from '../screens/cpr/ConsciousCheckScreen';
import AirCheckScreen from '../screens/cpr/AirCheckScreen';
import PulseCheckScreen from '../screens/cpr/PulseCheckScreen';
import BreathingScreen from '../screens/cpr/BreathingScreen';
import CPRCompressScreen from '../screens/cpr/CPRCompressScreen';

import InfantScreen from '../screens/infant/InfantScreen';
import InfantSurveyScreen from '../screens/infant/InfantSurveyScreen';
import InfantConsciousCheckScreen from '../screens/infant/InfantConsciousCheckScreen';
import InfantAirCheckScreen from '../screens/infant/InfantAirCheckScreen';
import InfantPulseCheckScreen from '../screens/infant/InfantPulseCheckScreen';
import InfantCallScreen from '../screens/infant/InfantCallScreen';
import InfantCompressScreen from '../screens/infant/InfantCompressScreen';
import InfantBreathingScreen from '../screens/infant/InfantBreathingScreen';

const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Registration: AuthStackNavigator,
  Home: MainTabNavigator,
  PostRegistration: PostRegistrationScreen, 
  Signin: SigninScreen,
  UserInfo: UserInfoScreen,
  Infant: InfantScreen,
  Child: ChildScreen,
  Drowning: DrowningScreen,
  // InfantCPR: {screen: InfantCPRStack},
  InfantSurvey: InfantSurveyScreen,
  InfantConsciousCheck: InfantConsciousCheckScreen,
  InfantPulseCheck: InfantPulseCheckScreen,
  InfantAirCheck: InfantAirCheckScreen,
  InfantCall: InfantCallScreen,
  InfantCompress: InfantCompressScreen,
  InfantBreathing: InfantBreathingScreen,
  // CPR: {screen: CPRStack},
  CPRSurvey: CPRSurveyScreen,
  ConsciousCheck: ConsciousCheckScreen,
  PulseCheck: PulseCheckScreen,
  AirCheck: AirCheckScreen,
  CPRCall: CPRCallScreen,
  CPRCompress: CPRCompressScreen,
  Breathing: BreathingScreen,
  // HandsOnly: {screen: HandsOnlyStack},
  Survey: SurveyScreen,
  Check: CheckScreen,
  Call: CallScreen,
  Compress: CompressScreen,
  Ambulance: AmbulanceScreen,
}, {
  stateName: 'MainAppNav',
  // initialRouteName: 'Infant',
  headerMode: 'none',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    },
	}),
});

export default class RootNavigation extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
