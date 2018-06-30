import React from 'react';
import { View, Text } from 'react-native';

import ButtonSmall from './ButtonSmall';
import Fonts from '../constants/Fonts';

const Controller2 = ({ nextOnPress, question }) => {
    const {
        containerStyle,
        questionStyle,
        buttonStyle,
        yesButtonStyle,
        questionContainerStyle,
        buttonContainerStyle,
        buttonTextStyle,
    } = styles;

    return (
            <View style={containerStyle}>
                <View style={questionContainerStyle}>
                    <Text style={questionStyle}>
                        { question }
                    </Text>
                </View>
                <View style={buttonContainerStyle}>
                    <ButtonSmall 
                        title='YES'
                        onPress={nextOnPress}
                        style={[buttonStyle, yesButtonStyle]}
                        fontStyle={buttonTextStyle}
                    />
                </View>                
            </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    questionStyle: {
        textAlign: 'center',
        fontSize: Fonts.xlarge,
        fontFamily: 'quicksand'
        
    },
    buttonStyle: {
        width: 100,
    },
    noButtonStyle: {
        borderColor: '#E05858',
        backgroundColor: '#E05858'
    },
    yesButtonStyle: {
        borderColor: '#5F968E',
        backgroundColor: '#5F968E'
    },
    buttonContainerStyle: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    questionContainerStyle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: '700',
        fontFamily: 'robotoslab',
        fontSize: Fonts.large
    }
};

export default Controller2;
