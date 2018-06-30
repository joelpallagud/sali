import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LanguageScreen from '../screens/LanguageScreen';
import GreetingsScreen from '../screens/static/GreetingsScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import UserCreateScreen from '../screens/Auth/UserCreateScreen';


const AuthStackNavigator = createStackNavigator({
    Language: LanguageScreen,
    Greetings: GreetingsScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
    UserCreate: UserCreateScreen, 
},{
    headerMode: 'none',
});

export default AuthStackNavigator;
