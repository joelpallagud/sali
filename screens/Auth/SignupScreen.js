import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import Input from '../../components/Input';
import Background from '../../components/Background';
import Button from '../../components/Button';
import TPAText from '../../components/TPAText';
import Logo from '../../components/Logo';

import { deviceWidth, deviceHeight } from '../../api/dimensions';
import { signUp } from '../../actions';
import validate, { confirmPassword } from '../../api/validate';

import {
	ICON_EMAIL,
	ICON_PASSWORD
} from '../../assets/icons';

class SignupScreen extends Component {
    state = {
		email: null,
		emailError: null,
		password: null,
		passwordError: null,
		confirmPassword: null,
		confirmPasswordError: null,
	}
	
    submit = async () => {
			const emailError = validate('email', this.state.email);
			const passwordError = validate('password', this.state.password);
			const confirmPasswordError = confirmPassword(this.state.password, this.state.confirmPassword); 

			await this.setState({
				emailError,
				passwordError,
				confirmPasswordError
			});

			if (!emailError && !passwordError && !confirmPasswordError) {
				await this.props.signUp(this.state.email, this.state.password);
				this.props.navigation.navigate('UserCreate');
			}
    }

    render() {
	const { container, avoidingContainer, input } = styles;

	return (
	    <View style={container}>
				<Background
					source={require('../../assets/images/asset8.png')}
				/>
				<KeyboardAvoidingView 
					style={avoidingContainer}
					behavior='padding'
				>
					<View>
						<ScrollView contentContainerStyle={{ alignItems: 'center' }}>
						  <Logo />
						  <Text> { this.props.error.message} </Text>
						  <ActivityIndicator size='small' color='#00ff00' animating={this.props.loading} />
						  <View style={input}>
								<Input
								    placeholder='Email*'
								    keyboardType='email-address'
								    autoCapitalize='none'
								    onChangeText={(email) => this.setState({ email })}
								    icon={ICON_EMAIL}
								    onBlur={() => {
								    	this.setState({
								    	  emailError: validate('email', this.state.email)
										});
									}}
								  	error={this.state.emailError}
								/>
						  </View>
						  <View style={input}>
								<Input
								    placeholder='Password*'
								    autoCapitalize='none'
								    secureTextEntry   
								    onChangeText={(password) => this.setState({ password })}
								    icon={ICON_PASSWORD}
								    onBlur={() => {
								    	this.setState({
								    	  passwordError: validate('password', this.state.password)
										});
									}}
								  error={this.state.passwordError}
								/>
						  </View>
						  <View style={input}>
								<Input
								  placeholder='Confirm Password*'
								  autoCapitalize='none'
								  secureTextEntry
								  onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
								  icon={ICON_PASSWORD}
								  onBlur={() => {
									this.setState({
									   confirmPasswordError: confirmPassword(this.state.password, this.state.confirmPassword)
									});
								  }}
								  error={this.state.confirmPasswordError}
								/>
						  </View>
						</ScrollView>
				  </View>
				</KeyboardAvoidingView>
				<View style={input}>
				  <Button 
						title='Submit'
						onPress={this.submit}
				  />
				</View>
	    </View>
	);
    }
}

const styles = {
    container: {
		flex: 1,
		justifyContent: 'center', 
		alignItems: 'center', 
    },
    avoidingContainer: {
		height: deviceHeight * 0.75,
		justifyContent: 'center', 
		alignItems: 'center', 
    },
    logo: {
		width: 50,
		height: 50,
		alignSelf: 'center',
		marginTop: deviceWidth * 0.05
    },
    input: {
		paddingBottom: 10,
		width: deviceWidth * 0.75,
		alignItems: 'center', 
    },
    
};

const mapStateToProps = (state) => ({
    email: state.auth,
    error: state.auth.error,
    loading: state.auth.loading,
    text: state.text,
});

export default connect(mapStateToProps, { signUp })(SignupScreen);
