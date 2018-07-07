import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';
import { deviceWidth, deviceHeight } from '../api/dimensions.js';
import Fonts from '../constants/Fonts.js';

const ButtonSmall = ({ title, onPress, style, fontStyle }) => {
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
        flex: 1
    },
    buttonStyle: {
        borderRadius: 30,
        borderWidth: 3,
        width: moderateScale(80),
        height: moderateScale(50),
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
        fontFamily: 'somatic'
    }
};

export default ButtonSmall;
