import React from 'react';
import { View, Text } from 'react-native';
import Fonts from '../constants/Fonts.js';

const HeaderText = ({ text, style, viewStyle }) => {
    const { containerStyle, headerStyle } = styles;

    return (
        <View style={[containerStyle, viewStyle]}>
            <Text style={[headerStyle, style]}>
                { text }
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        // alignItems: 'center',
        // backgroundColor: 'red'
    },
    headerStyle: {
        fontSize: Fonts.xlarge,
        color: '#5F968E',
        textAlign: 'center',
        fontFamily: 'comfortaa',
    },
};

export default HeaderText;
