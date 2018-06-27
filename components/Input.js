import React from 'react';
import { TextInput, View, Image, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { deviceWidth, deviceHeight } from '../api/dimensions';
import Fonts from '../constants/Fonts';


const Input = ({ placeholder, value, onChangeText, secureTextEntry, autoCapitalize, keyboardType, src, error, onBlur}) => {
    const { inputStyle, containerStyle, iconStyle, errorStyle, errorInputStyle } = styles;
    
    return (
        <View style={{ flex: 1, width: deviceWidth * 0.75 }} >
            <View style={(error) ? errorStyle : containerStyle}>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    placeholderTextColor={'gray'}
                    autoCorrect={false}
                    style={(error) ? errorInputStyle : inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                    underlineColorAndroid='transparent'
                    autoCapitalize={autoCapitalize}
                    keyboardType={keyboardType}
                    onBlur={onBlur}
                />
                <Image
                    style={iconStyle}
                    source={src}
                />
            </View>
            <Text>{error}</Text>
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingLeft: deviceWidth * 0.025,
        fontFamily: 'quicksand',
        flex: 1,
        fontSize: Fonts.medium,
        alignItems: 'center'
    },
    errorInputStyle: {
        paddingLeft: deviceWidth * 0.025,
        fontFamily: 'quicksand',
        flex: 1,
        fontSize: Fonts.medium,
        alignItems: 'center'
    },
    iconStyle: {
        position: 'absolute',
		right: deviceWidth * 0.025,
        marginRight: 0,
        width: moderateScale(20),
        height: moderateScale(20),
    },
    containerStyle: {
        backgroundColor: 'white',
        height: deviceHeight * 0.07,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    errorStyle: {
        backgroundColor: 'white',
        height: deviceHeight * 0.07,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default Input;
