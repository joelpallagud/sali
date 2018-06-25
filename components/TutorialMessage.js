import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fonts from '../constants/Fonts';

class TutorialMessageComponent extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={[styles.invisible, this.props.isVisible && styles.messageBox]}>
                <Text style={styles.message}>{this.props.message}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    messageBox: {
        backgroundColor: 'white',
        opacity: 1,
        width: '60%'
    },
    invisible: {
        opacity: 0,
    },
    message: {
        fontSize: Fonts.medium,
        padding: 10,
    }
    
});

export default TutorialMessageComponent;
