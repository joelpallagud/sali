import React, { Component } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import { phonecall } from 'react-native-communications';

import NumberListItem from './NumberListItem';
import HeaderText from './HeaderText';
import { showHotlines } from '../actions';
import Fonts from '../constants/Fonts';

class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            errorMessage: null,
            data: [],
        };
    }

    componentDidMount() {
        this.getLocationAsync();
    }

    getLocationAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        } else {
            const pos = await Location.getCurrentPositionAsync({});
            const coords = { 
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            };
            const location = await Location.reverseGeocodeAsync(coords);
            this.setState({ location });
            this.props.showHotlines(this.state.location[0].city);
            console.log(this.props.hotlines);
        }
    };

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
