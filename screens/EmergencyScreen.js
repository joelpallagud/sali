import React, { Component } from 'react';
import { Image, View, Alert, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Location, Permissions, Constants } from 'expo';
import g from 'ngeohash';

import Button from '../components/Button';
import Card from '../components/Card';
import HeaderText from '../components/HeaderText';
import Logo from '../components/Logo';
import { CARD_CPR, ICON_EMERGENCY } from '../assets/images';
import { setLocation, getLocation } from '../actions';
import { SEND_TEXT_ENDPOINT } from '../api/constants';

// import Background from '../components/Background';
// import Tutorial from '../components/Tutorial';

class EmergencyScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Emergencies',
        tabBarIcon: () => (
          <Image
              source={ICON_EMERGENCY}
              style={{ resizeMode: 'contain', width: 25, height: 25 }}
          />
        ),
    };

    state = {
        errorMessage: null,
    };

    componentDidMount = async () => {
        const allowsLocation = await AsyncStorage.getItem('allow location');

        if  (allowsLocation === 'true') {
            await this.getLocationAsync();
        }
      }

    getLocationAsync = async () => {
        try {
            const { status } = await Permissions.askAsync(Permissions.LOCATION);
            const { locationServicesEnabled } = await Location.getProviderStatusAsync();
            
            if (status === 'denied') {
                await this.setState({
                    errorMessage: 'Permission to access location was denied',
                });
                Permissions.askAsync(Permissions.LOCATION);
            } else if (locationServicesEnabled) {
                this.props.getLocation();
                const pos = await Location.getCurrentPositionAsync({});
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                const coords = { 
                    latitude: lat,
                    longitude: lng,
                    hash: g.encode(lat, lng),
                    g10: g.encode_int(lat, lng, 24),
                    g5: g.encode_int(lat, lng, 26),
                    g3: g.encode_int(lat, lng, 28),
                    g1: g.encode_int(lat, lng, 30)
                };

                this.props.setLocation(coords);
            } else {
                Alert.alert(
                    'Turn on your location',
                    'Turn it on',
                    [
                      { text: 'OK', onPress: () => this.getLocationAsync()  },
                    ],
                    { cancelable: false }
                )
            }
        } catch (err) {
            console.log(err);
        }
        return;
    };

    handleClick = () => {
        this.props.navigation.navigate('Infant');
    }
    //For future use
    // renderCards = (card, i) => {
	// <Card onPress ={this.handleClick} title ={card.title} key= "card${i}" />;
    // }

    render() {
        const { emergencyHeader, practiceButton } = this.props.text;
        // const { viewed, error } = this.props.tutorial;
        console.log(this.props.profile);

        return (
            <View style={styles.containerStyle}>
                {/* <Background 
                    source={ require('../assets/images/asset3.png') }
                /> */}
                {/* { !viewed && <Tutorial /> } */}
                <View style={styles.containerStyle}>
                    <Logo />
                    <HeaderText text={emergencyHeader} />
                    <Card title='CPR' key="card-1" src={CARD_CPR} />
                    <Button title={practiceButton} onPress={this.handleClick} />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
};
const mapStateToProps = (state) => {
    const { text, profile } = state;
    const { tutorial } = state;
    
    return { text, tutorial, profile };
};

export default connect(mapStateToProps, { setLocation, getLocation })(EmergencyScreen);
