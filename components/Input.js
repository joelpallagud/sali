import React from 'react';
import { TextInput, View, Image, Text } from 'react-native';
import { Icon } from 'expo';
import { moderateScale } from 'react-native-size-matters';
import { deviceWidth, deviceHeight } from '../api/dimensions';
import Fonts from '../constants/Fonts';


const Input = ({ placeholder, value, onChangeText, secureTextEntry, autoCapitalize, keyboardType, icon, error, onBlur}) => {
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
                <Icon.Ionicons
                    name={ icon }
                    size={Fonts.icon}
                    style={iconStyle}
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
        width: deviceHeight * 0.07,
        textAlign: 'center',
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
