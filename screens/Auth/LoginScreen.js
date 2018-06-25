import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Facebook } from 'expo';

import ButtonLarge from '../../components/ButtonLarge';
import Background from '../../components/Background';
import HeaderText from '../../components/HeaderText';
import { LOGO } from '../../assets/images';
import { deviceHeight } from '../../utils/dimensions';

import { signInWithFacebook } from '../../actions';
import * as c from '../../constants';


class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {};


        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onSignInWithFacebook = this.onSignInWithFacebook.bind(this);
    }

    async onSignInWithFacebook() {
        const options = { permissions: ['public_profile', 'email'] };
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(c.FACEBOOK_APP_ID, options);

        if (type === 'success') {
            this.props.signInWithFacebook(token, this.onSuccess, this.onError);
        }
    }

    onSuccess({ exists, user }) {
        if (exists) {
            console.log('Success');
            this.props.navigation.navigate('PostRegistration');
        } else console.log('Unsuccessful');
    }

    onError(error) {
        console.log(`Error${error}`);
    }


    signUpClick = () => {
        this.props.navigation.navigate('Signup');
    }
    
    regLoginClick = () => {
        this.props.navigation.navigate('Signin');
    }

    fbClick = () => {
        this.props.navigation.navigate('PostRegistration');
    }

    render() {
        const { login, fbLogin, regLogin, signUp } = this.props.text;
        const { containerStyle, logoStyle, textContainerStyle } = styles;
        
        return (
            <View style={containerStyle} >
                <Background
                    source={require('../../assets/images/asset4.png')}
                />
                <Image
                    style={logoStyle}
                    source={LOGO}
                />
                <View style={textContainerStyle}>
                    <HeaderText text={login} />
                    <ButtonLarge 
                        title={signUp}
                        onPress={this.signUpClick}
                    />
                    <ButtonLarge 
                        title={regLogin}
                        onPress={this.regLoginClick}
                    />
                    <ButtonLarge 
                        title={fbLogin}
                        onPress={this.fbClick}
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
        backgroundColor: 'white'
    },
    logoStyle: {
        width: deviceHeight * 0.1,
        height: deviceHeight * 0.1,
        position: 'absolute',
        top: deviceHeight * 0.075
    },
    textContainerStyle: {
        backgroundColor: 'rgba( 0, 0, 0, 0)',
        alignItems: 'center', 
    }
};

const mapStateToProps = (state) => {
    const { text } = state;

    return { text };
};

export default connect(mapStateToProps, { signInWithFacebook })(LoginScreen);
