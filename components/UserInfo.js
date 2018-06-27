import React from 'react';
import { View, Image } from 'react-native';
import HeaderText from './HeaderText.js';
import ContactText from './ContactText.js';
import Logo from './Logo.js';
import { deviceHeight, deviceWidth } from '../api/dimensions.js';
import { ICON_PROFILE } from '../assets/images/index.js';
import Fonts from '../constants/Fonts.js';

const UserInfo = ({ name, email, city, number }) => {
    const {
        containerStyle,
        headerContainerStyle,
        imageContainerStyle,
        contactContainerStyle,
        nameStyle,
        cityStyle,
        imageStyle,
    } = styles;

    return (
        <View style={containerStyle}>
            <View style={imageContainerStyle}>
                <Image 
                    style={imageStyle}
                    source={ ICON_PROFILE }
                />
                <View style={headerContainerStyle}>
                    <HeaderText
                        text={name}
                        style={nameStyle} 
                    />
                    <HeaderText 
                        text={city}
                        style={cityStyle}
                    />
                </View>
            </View>
            <View style={contactContainerStyle}>
                <ContactText
                    label='Email: '
                    text={email}
                />
                <ContactText
                    label='Mobile number: '
                    text={number} 
                />
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: deviceWidth * 0.9,
        height: deviceHeight * 0.25,
        borderBottomWidth: 3,
        borderBottomColor: '#D5C9B1',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    imageContainerStyle: {
        flexDirection: 'row',
        width: '85%',
        alignItems: 'center',
    },
    headerContainerStyle: {
        marginLeft: deviceWidth * 0.05
    },
    contactContainerStyle: {
        justifyContent: 'center',
        width: '85%',
        height: '30%'
    },
    nameStyle: {
        fontSize: Fonts.large
    },
    cityStyle: {
        fontSize: Fonts.medium,
        color: 'black',
        textAlign: 'left'
    },
    imageStyle: {
        height: deviceHeight * 0.1,
        width: deviceHeight * 0.1,
    }
};

export default UserInfo;
