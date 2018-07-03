import React from 'react';
import { Platform, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import RootNavigation from './navigation/RootNavigation';
import reducers from './reducers';
import {
	ICON_CALL,
	ICON_EMERGENCY,
	ICON_FB,
	ICON_GIFT,
	ICON_LOCATION,
	ICON_EMAIL,
	ICON_NAME,
	ICON_NUMBER,
	ICON_NUMBER_ERROR,
	ICON_PASSWORD,
	ICON_PASSWORD_ERROR,
	ICON_PROFILE,
	CARD_CPR,
	LOGO,
	LOGO_NAME,
	LOGO_WHITE
} from './assets/images';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
    console.ignoredYellowBox = ['Setting a timer'];

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#ddd' }}>
						<View style={styles.container}>
        	  {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        	    <RootNavigation />
        	  </View>
          </SafeAreaView>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/asset2.png'),
				require('./assets/images/asset3.png'),
				require('./assets/images/asset4.png'),
				require('./assets/images/asset5.png'),
				require('./assets/images/asset6.png'),
				require('./assets/images/asset7.png'),
				require('./assets/images/asset8.png'),
				require('./assets/images/asset9.png'),
				require('./assets/images/asset10.png'),
				require('./assets/images/asset13.png'),
				require('./assets/images/asset14.png'),
				require('./assets/images/asset15.png'),
				require('./assets/images/asset16.png'),
				LOGO,
				LOGO_NAME,
				LOGO_WHITE,
				ICON_CALL,
				ICON_EMERGENCY,
				ICON_FB,
				ICON_GIFT,
				ICON_LOCATION,
				ICON_EMAIL,
				ICON_NAME,
				ICON_NUMBER,
				ICON_NUMBER_ERROR,
				ICON_PASSWORD,
				ICON_PASSWORD_ERROR,
				ICON_PROFILE,
				CARD_CPR
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'comfortaa' : require('./assets/fonts/Comfortaa-Bold.ttf'),
        'quicksand' : require('./assets/fonts/Quicksand-Regular.otf'),
        'robotoslab' : require('./assets/fonts/RobotoSlab-Regular.ttf'),
        'somatic' : require('./assets/fonts/Somatic-Rounded.otf'),
        'source-sans' : require('./assets/fonts/SourceSansPro-Regular.ttf'),
        'source-sans-bold' : require('./assets/fonts/SourceSansPro-Bold.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: (Platform.OS === 'ios') ? '#ddd' : 'black', 
    paddingTop: (Platform.OS === 'ios') ? 0 : 25 
  },
});
