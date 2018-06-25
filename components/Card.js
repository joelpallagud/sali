import React from 'react';
import { View, Text, Image } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { LOGO } from '../assets/images';
import { deviceHeight, deviceWidth } from '../utils/dimensions';

const Card = ({ title, src }) => {
    const {
        containerStyle,
        backgroundImageStyle,
        titleStyle,
        // buttonStyle,
        titleContainerStyle
    } = styles;

    return (
        <View style={containerStyle}>
            <Image 
                style={backgroundImageStyle}
                source={src}
            />
            {/* <TouchableOpacity>
                <Text style={ buttonStyle }>
                    Learn More
                </Text>
            </TouchableOpacity> */}
            {/* <View style={titleContainerStyle}>
                <Text style={titleStyle}>
                    { title }
                </Text>
            </View> */}
        </View>
    );
};

const styles = {
    containerStyle: {
        height: deviceHeight * 0.3,
        width: deviceWidth * 0.9,
        borderWidth: 3,
        borderColor: '#252525',
        borderRadius: 20,
        shadowColor: '#252525',
        shadowOpacity: 0.5,
        shadowRadius: 20,
        shadowOffset: { width: -1, height: 4 },
        elevation: 1
    },
    backgroundImageStyle: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    titleContainerStyle: {
        borderTopWidth: 2,
        borderColor: 'gray',
        height: '25%',
        backgroundColor: 'white',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // buttonStyle: {
    //     height: 30,
    //     alignSelf: 'flex-end',
    // }
};

export default Card;
