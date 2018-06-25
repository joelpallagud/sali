import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import ProfileScreen from '../screens/static/ProfileScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import PracticeScreen from '../screens/static/PracticeScreen';

import TabBarIcon from '../components/TabBarIcon';

import deviceHeight from '../utils/dimensions';
import Colors from '../constants/Colors';

const EmergencyStack = createStackNavigator({
  Emergency: EmergencyScreen,
}, {
  headerMode: 'none',
});

EmergencyStack.navigationOptions = {
  tabBarLabel: 'Emergency',
  tabBarIcon: () => (
    <Icon.Ionicons
        name={'md-add-circle'}
        size={26}
        style={{ marginBottom: -3 }}
        color={Colors.red}
      />
  ),
};


const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
}, {
  headerMode: 'none'
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-contact-outline' : 'ios-contact-outline'}
    />
  ),
};

const PracticeStack = createStackNavigator({
  Practice: PracticeScreen,
}, {
  headerMode: 'none'
});

PracticeStack.navigationOptions = {
  tabBarLabel: 'Practice',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ?'ios-pulse' : 'ios-pulse'}
    />
  ),
};

export default createBottomTabNavigator({
  Profile: ProfileStack,
  Emergency: EmergencyStack,
  Practice: PracticeStack  
},{
  initialRouteName: 'Emergency',
  tabBarOptions: {
    activeTintColor: Colors.tintColor
  }
});
