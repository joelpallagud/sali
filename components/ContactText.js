import React from 'react';
import { View, Text } from 'react-native';

import { deviceWidth } from '../utils/dimensions.js';
import Fonts from '../constants/Fonts.js';

const ContactText = ({ label, text }) => {
    const { containerStyle, labelStyle, bodyStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                { label }
            </Text>
            <Text style={bodyStyle}>
                { text }
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row'
    },
    labelStyle: {
        fontSize: Fonts.medium,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'robotoslab'
    },
    bodyStyle: {
        fontSize: Fonts.medium,
        color: '#000',
        fontFamily: 'robotoslab'
    },
};

export default ContactText;
