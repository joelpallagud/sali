import React, { Component } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import { phonecall } from 'react-native-communications';
import axios from 'axios';

import { SEND_TEXT_ENDPOINT } from '../api/constants';


import NumberListItem from './NumberListItem';
import HeaderText from './HeaderText';
import { showHotlines } from '../actions';
import Fonts from '../constants/Fonts';


class NumberList extends Component {
    state = {
        location: null,
        errorMessage: null,
    }
    componentDidMount() {
        this.getLocationAsync();
    }

    getLocationAsync = async () => {
        try {
            const { status } = await Permissions.getAsync(Permissions.LOCATION);
            const { locationServicesEnabled } = await Location.getProviderStatusAsync();
          
            if (status === 'denied') {
                await this.setState({ 
                    errorMessage: 'Permission to access location was denied' 
                });
                Permissions.askAsync(Permissions.LOCATION);
            } else if (locationServicesEnabled) {
                const pos = await Location.getCurrentPositionAsync({});
                const coords = { 
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                };
                const location = await Location.reverseGeocodeAsync(coords);
                this.setState({ location });
                this.props.showHotlines(location[0].city);
                // this.sendTexts(coords, location);
            }
            else {
                const place = [{ city: 'Metro Manila' }];
                this.setState({ location: place });
                this.props.showHotlines('Metro Manila');
            };  
        } catch (err) {
            this.setState({ location: false });
        }
    };

    sendTexts = async (coords, location) => {
        const { city, name, region, street } = location[0];
        const lat = coords.latitude;
        const lng = coords.longitude;
        const place = `${name} ${street} St. ${city}, ${region}`;
        const data = {
            place,
            lat, 
            lng
        };

        axios.post(SEND_TEXT_ENDPOINT, data, {
            headers: {
                'Content-Type': 'application/json',
            }})
            .catch((error) => {
                console.log(error);
            })
    }

    

    renderItem = ({ item }) => (
        <NumberListItem
            item={item}
            onPress={() => phonecall(item.number, false)} 
        />
    );


    render() {
        const { containerStyle, titleStyle, listContainerStyle, placeStyle } = styles;
        let text = 'Getting location..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
            Alert.alert(
                'Error getting location',
                this.state.errorMessage,
                [{
                    text: 'Ok',
                    style: 'default' 
                }]
            );
            text = 'Metro Manila';
        } else if (this.state.location) {
            text = this.state.location[0].city;
        }

        return (
            <View style={containerStyle}>
                <HeaderText 
                    style={titleStyle}
                    text="Emergency Numbers"
                />
               <View style={listContainerStyle}>
                    <Text style={placeStyle}>
                        {text}
                    </Text>

                    <FlatList
                        data={this.props.hotlines}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.number}
                    />
               </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    titleStyle: {
        marginTop: 40,
    },
    listContainerStyle: {
        width: '90%',
        marginTop: 20
    },
    placeStyle: {
        fontSize: Fonts.medium
    }
};

const mapStateToProps = (state) => ({
    location: state.auth,
    hotlines: state.hotlines,
});
export default connect(mapStateToProps, { showHotlines })(NumberList);
