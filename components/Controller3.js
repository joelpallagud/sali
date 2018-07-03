import React from 'react';
import { View, Text } from 'react-native';

import ButtonSmall from './ButtonSmall';
import Fonts from '../constants/Fonts';

const Controller = ({ nextOnPress, backOnPress, question }) => {
    const {
        containerStyle,
        questionStyle,
        buttonStyle,
        noButtonStyle,
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
                        title='NO'
                        onPress={backOnPress}
                        style={[buttonStyle, noButtonStyle]}
                        fontStyle={buttonTextStyle}
                    />
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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    questionStyle: {
        textAlign: 'center',
        fontSize: Fonts.xlarge,
        fontFamily: 'source-sans'
        
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        // backgroundColor: 'blue'
    },
    questionContainerStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: '700',
        fontFamily: 'robotoslab',
        fontSize: Fonts.large
    }
};

export default Controller;
