import React, { Component } from 'react';
import { Image, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Location, Permissions, Constants } from 'expo';
import g from 'ngeohash';
import axios from 'axios';

import Button from '../components/Button';
import Card from '../components/Card';
import HeaderText from '../components/HeaderText';
import Logo from '../components/Logo';
import { CARD_CPR, ICON_EMERGENCY } from '../assets/images';
import { setLocation } from '../actions';
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
        location: null,
        errorMessage: null,
        address: null
    };

    componentDidMount = async () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          this.setState({
            errorMessage: 'Oops, error in getting location',
          });
        } else {
            await this.getLocationAsync();
            // this.getNearbyUsers();
            // this.sendTexts();
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
                const place = await Location.reverseGeocodeAsync({
                    latitude: lat,
                    longitude: lng
                });

                this.setState({ location: coords, address: place });
                this.props.setLocation(this.state.location);
            } else {
                Alert.alert(
                    'Turn on your location',
                    [
                      { text: 'OK', onPress: () => this.getLocationAsync() },
                    ],
                    { cancelable: false }
                )
            }
        } catch (err) {
            console.log(err);
        }
    };

    sendTexts = () => {
        const { city, name, region, street } = this.state.address[0];
        const lat = this.state.location.latitude;
        const lng = this.state.location.longitude;
        const place = `${name} ${street} St. ${city}, ${region}`;
        const data = {
            place,
            lat, 
            lng
        };
        axios.post(SEND_TEXT_ENDPOINT, data, {
            headers: {
                'Content-Type': 'application/json',
            }
            .catch((error) => {
                console.log(error);
            })
        });
    }
    
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
    const { text } = state;
    const { tutorial } = state;
    
    return { text, tutorial };
};

export default connect(mapStateToProps, { setLocation })(EmergencyScreen);
