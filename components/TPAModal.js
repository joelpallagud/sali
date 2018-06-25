import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button.js';
import { deviceHeight, deviceWidth } from '../utils/dimensions.js';
import Fonts from '../constants/Fonts.js';

const TPAModal = ({ onPress }) => {
    const {
        containerStyle,
        headerContainerStyle,
        headerStyle,
        bodyContainerStyle,
        bodyStyle,
        buttonContainerStyle
    } = styles;

    return (
        <View style={containerStyle}>
            <View style={headerContainerStyle}>
                <Text style={headerStyle}>
                    Terms and Privacy {'\n'}
                    Policy/Agreements
                </Text>
            </View>
            <View style={bodyContainerStyle} >
                <Text style={bodyStyle}>
                Take note CPR does not guarantee that{'\n'}
                the person will survive, but it will increase{'\n'}
                the victim’s chance of survival{'\n'}
                {'\n'}
                Other terms
                </Text>
            </View>
            <View style={buttonContainerStyle}>
                <Button
                    title='Agree'
                    onPress={onPress}
                />
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        backgroundColor: '#D5C9B1',
        height: deviceHeight * 0.8,
        width: deviceWidth * 0.8,
        alignItems: 'center'
    },
    headerContainerStyle: {
        flex: 15,
        justifyContent: 'center'
    },
    headerStyle: {
        fontSize: Fonts.large
    },
    bodyContainerStyle: {
        flex: 70
    },
    bodyStyle: {
        fontSize: Fonts.medium
    },
    buttonContainerStyle: {
        flex: 15
    }
};

export default TPAModal;
