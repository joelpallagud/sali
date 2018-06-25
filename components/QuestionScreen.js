import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import Background from './Background';
import Controller from './Controller';
import { deviceWidth, deviceHeight } from '../utils/dimensions';

class QuestionScreen extends Component {
    render() {
        const { question, backClick, nextClick } = this.props;
        const { containerStyle, controllerStyle } = styles;

        return (
            <View style={containerStyle}>
                <Background
                    source={require('../assets/images/asset3.png')}
                />
                <View style={controllerStyle}>
                    <Controller 
                        backOnPress={backClick}  
                        nextOnPress={nextClick} 
                        question={question}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    controllerStyle: {
        width: deviceWidth * 0.8,
        height: deviceHeight * 0.5,
        position: 'absolute',
        top: deviceHeight * 0.3
    }
};

export default QuestionScreen;
