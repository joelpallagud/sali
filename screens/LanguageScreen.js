import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { chooseLanguage } from '../actions';
import Button from '../components/Button';
import Background from '../components/Background';
import HeaderText from '../components/HeaderText';
import Logo from '../components/Logo';
import { deviceHeight, deviceWidth } from '../api/dimensions';

class LanguageScreen extends Component {
    componentDidMount() {
        const { text, auth, navigation } = this.props;
    
        if (text && auth.user) {
            navigation.navigate('UserCreate')
        }
    }
    englishHandleClick = () => {
        this.props.chooseLanguage('English');
        this.props.navigation.navigate('Greetings');
    }
    tagalogHandleClick = () => {
        this.props.chooseLanguage('Tagalog');
        this.props.navigation.navigate('Greetings');
    }

    render() {
        const { containerStyle, textContainerStyle, imageContainerStyle } = styles;
        
        return (
            <View style={containerStyle} >
                <Background
                    source={require('../assets/images/asset3.png')}
                />
                 <View style={imageContainerStyle}>
                    <Logo />
                </View>
                <View style={textContainerStyle}>
                    <HeaderText
                        text='Select Language'
                    />        
                    <Button 
                        title='English'
                        onPress={this.englishHandleClick}
                    />
                    <Button 
                        title='Tagalog'
                        onPress={this.tagalogHandleClick}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    logoStyle: {
        width: 100,
        height: 100,
    },
    textContainerStyle: {
        backgroundColor: 'rgba( 0, 0, 0, 0)',
        height: deviceHeight * 0.5,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    imageContainerStyle: {
        position: 'absolute',
        top: deviceHeight * 0.1,
    }
};

const mapStateToProps = (state) => {
    const { text, auth } = state;
    

    return { text, auth };
};

export default connect(mapStateToProps, { chooseLanguage })(LanguageScreen);
