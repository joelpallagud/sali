import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../components/Background';
import { deviceWidth, deviceHeight } from '../../api/dimensions';
import { LOGO } from '../../assets/images';
import { ICON_EMAIL, ICON_PASSWORD } from '../../assets/icons';
import { loginUser } from '../../actions';
import validate from '../../api/validate';
import validation from '../../api/validation';
import Fonts from '../../constants/Fonts';
import HeaderText from '../../components/HeaderText';

class SigninScreen extends Component {
    backClick = () => {
		this.props.navigation.navigate('Home');
    }

    state = {
		email: null,
		password: null, 
		error: '',
    }

    submit= () => {
		this.props.loginUser(this.state.email, this.state.password);
		console.log(this.props.error);
    }


    render() {
	const { container, logo, input, headerStyle } = styles;
	const { loginHeader } = this.props.text;

	return (
	    <View style={container}>
			<Background
			    source={require('../../assets/images/asset8.png')}
			/>
			<Image
			    style={logo}
			    source={LOGO}
			/>
				<HeaderText
					Text={ loginHeader } 
				/>
			    <KeyboardAvoidingView style={input}>
					<Input
					    style={input}
					    placeholder='Email'
						onChangeText={(email) => this.setState({ email })}
						icon={ICON_EMAIL}
					    keyboardType='email-address'
					    autoCapitalize='none'
					/>
			    </KeyboardAvoidingView>
			    <KeyboardAvoidingView style={input}>
					<Input
					    style={input}
					    placeholder='Password'
					    autoCapitalize='none'
					    secureTextEntry
						onChangeText={(password) => this.setState({ password })}
						icon={ICON_PASSWORD}
					/>
			    </KeyboardAvoidingView>
			    <View style={input}>
					<Button 
					    title='Enter'
					    onPress={this.submit}
					/>
					<ActivityIndicator size='small' color='#00ff00' animating={this.props.loading} />
				<Text> { this.props.error.message} </Text>
			    </View>
	    </View>
	);
    }
}

const styles = {
    container: {
		flex: 1,
		justifyContent: 'center', 
		alignItems: 'center'
    },
    headerStyle: {
		textAlign: 'center',
		color: '#5F968E',
		fontSize: Fonts.large,
		fontFamily: 'somatic',
		marginBottom: 20
    },
    logo: {
		width: deviceHeight * 0.1,
		height: deviceHeight * 0.1,
		position: 'absolute',
		top: deviceHeight * 0.075
    },
    input: {
		paddingBottom: 10,
		width: deviceWidth * 0.8,
		alignItems: 'center', 
		height: deviceHeight*0.1
    },
};

const mapStateToProps = (state) => ({
    email: state.auth,
    error: state.auth.error,
    loading: state.auth.loading,
    text: state.text,
});


export default connect(mapStateToProps, { loginUser })(SigninScreen);
