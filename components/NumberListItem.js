import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { Icon } from 'expo';
import Fonts from '../constants/Fonts';
import { ICON_CALL } from '../assets/icons';

class NumberListItem extends Component {
    render() {
        const {
            containerStyle,
            buttonContainerStyle,
            buttonStyle,
            placeContainerStyle,
            numberContainerStyle,
            textStyle
        } = styles;
        const { item, onPress } = this.props;

        return (
            <View style={containerStyle}>
                <View style={placeContainerStyle}>
                    <Text style={textStyle}>
                        { item.place }
                    </Text>
                </View>
                <View style={numberContainerStyle}>
                    <Text style={textStyle}>
                        { item.number }
                    </Text>
                </View>
                <View style={buttonContainerStyle}>
                    <TouchableHighlight onPress={onPress} style={buttonStyle}>
                        <Text style={textStyle}>
                        <Icon.Ionicons
                            name={ICON_CALL}
                            size={Fonts.icon}
                        />
                        </Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    buttonContainerStyle: {
        width: '20%',
        alignItems: 'center',
    },
    buttonStyle: {
        borderWidth: 1,
        borderRadius: 10000000,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeContainerStyle: {
        width: '45%',
    },
     numberContainerStyle: {
        width: '35%',
        alignItems: 'center'
    },
    textStyle: {
        fontFamily: 'robotoslab',
        fontSize: Fonts.medium
    }
};

export default NumberListItem;
