import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import { deviceHeight, deviceWidth } from '../utils/dimensions.js';
import Fonts from '../constants/Fonts.js';

const ButtonComponent = ({ title, onPress, style, fontStyle }) => {
    const { buttonContainerStyle, buttonStyle, textStyle } = styles;

    return (
        <View style={buttonContainerStyle}>
            <Button
                title={title}
                buttonStyle={[buttonStyle, style]} 
                color={'#262626'}
                onPress={onPress}
                textStyle={[textStyle, fontStyle]}
            />
        </View>
    );
};

const styles = {
    buttonContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: deviceWidth * 0.05,
        width: deviceWidth * 0.52,
        height: deviceHeight * 0.086
    },
    buttonStyle: {
        borderRadius: 30,
        borderWidth: 3,
        width: deviceWidth * 0.5,
        height: deviceHeight * 0.08,
        borderColor: '#BFDCCF',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: -1, height: 5 },
        elevation: 3
    },
    textStyle: {
        fontSize: Fonts.medium, 
        fontFamily: 'comfortaa'
    }
};

export default ButtonComponent;
