import React, { Component } from 'react';
import { View, Text, Alert, ActivityIndicator, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Icon } from 'expo';
import DatePicker from 'react-native-datepicker';
import Modal from 'react-native-modal';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import Input from '../../components/Input';
import Background from '../../components/Background';
import Button from '../../components/Button';
import TPAModal from '../../components/TPAModal';
import TPAText from '../../components/TPAText';
import Logo from '../../components/Logo';

import { deviceWidth, deviceHeight } from '../../api/dimensions';
import { userCreate } from '../../actions';
import validate from '../../api/validate';
import { ICON_LOCATION, ICON_NUMBER, ICON_NAME, ICON_GIFT } from '../../assets/icons';
import Fonts from '../../constants/Fonts';

class UserCreateScreen extends Component {
    state = {
		phone: null,
		phoneError: null,
		address: null,
		addressError: null,
		name: null,
		nameError: null,
		birthday: null,
		birthdayError: null,
		isModalVisible: false
    }

    onModalButtonPress = async () => {
		if (!this.props.error) {
			await this.toggleModal();
			this.props.navigation.navigate('GetLocation')
		}
	}

	submit = () => {
		const { name, birthday, phone, address } = this.state;
	
		const nameError = validate('name', this.state.name);
		const phoneError = validate('phone', this.state.phone);
		const addressError = validate('address', this.state.address);
		const birthdayError = validate('birthday', this.state.birthday);
	
		this.setState({
			nameError,
			phoneError,
			addressError,
			birthdayError
		});
	
		if (!nameError && !phoneError && !addressError && !birthdayError) {
			this.props.userCreate(name, birthday, phone, address);
			this.toggleModal();
		}
	}

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
    }


	backClick = () => {
		this.props.navigation.navigate('Home');
    }

    render() {
	const { login, terms } = this.props.text;
	const { modalStyle, container, avoidingContainer, input, errorDateContainerStyle, 
		dateContainerStyle } = styles;
	const { phone, address, name, birthday, isModalVisible } = this.state;

	return (
		<View style={container}>
			<Background
				source={require('../../assets/images/asset8.png')}
			/>
			<Modal isVisible={isModalVisible} style={modalStyle} >
				<TPAModal 
					onPress={this.onModalButtonPress}
				/>
				<TPAText text={terms} />
			</Modal>
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
								value={name}
								placeholder='Name'
								onChangeText={(name) => this.setState({ name })}
								icon={ICON_NAME}
								onBlur={() => {
									this.setState({
										nameError: validate('name', this.state.name) 
									});
								}}
								error={this.state.nameError}
							/>
						</View>
						<View style={input}>
							<View style={{ height: deviceHeight * 0.075, width: deviceWidth * 0.75 }}>
								<DatePicker
									style={(this.state.birthdayError) ? errorDateContainerStyle : dateContainerStyle}
									date={birthday}
									mode='date'
									format='MM/DD/YYYY'
									minDate='01-01-1900'
									maxDate='12-31-2020'
									confirmBtnText='Confirm'
									cancelBtnText='Cancel'
									placeholder='Birthday'
									androidMode='spinner'
									iconComponent={
										<Icon.Ionicons
                            				name={ICON_GIFT}
											size={Fonts.icon}
											style={{
												position: 'absolute',
												right: 0,
												width: deviceHeight * 0.07,
												textAlign: 'center',
											}}
										/>
									}
									customStyles={{
										dateInput: {
											paddingLeft: deviceWidth * 0.025,
											borderWidth: 0,
											position: 'absolute',
											left: 0,
										},
										dateText: {
											fontFamily: 'quicksand',
											fontSize: Fonts.medium,
										},
										placeholderText: {
											fontFamily: 'quicksand',
											fontSize: Fonts.medium,
											color: 'gray'
										}
									}}
									onDateChange={(date) => this.setState({ birthday: date })}
								/>
								<Text>{this.state.birthdayError}</Text>
							</View>
						</View>
						<View style={input}>
							<Input
								value={phone}
								placeholder='Mobile number'
								keyboardType='phone-pad'
								onChangeText={(phone) => this.setState({ phone })}
								icon={ICON_NUMBER}
								onBlur={() => {
									this.setState({
										phoneError: validate('phone', this.state.phone) 
									});
								}}
								error={this.state.phoneError}
							/>
						</View>
						<View style={input}>
							<Input
								value={address}
								placeholder='City'
								onChangeText={(address) => this.setState({ address })}
								icon={ICON_LOCATION}
								onBlur={() => {
									this.setState({
										addressError: validate('addressError', this.state.address) 
									});
								}}
								error={this.state.addressError}
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
    modalStyle: {
		flex: 1,
		alignItems: 'center'
	},
	dateContainerStyle: {
		backgroundColor: 'white',
		height: deviceHeight * 0.07,
		borderWidth: 1,
		borderRadius: 10,
		width: '100%',
		justifyContent: 'center'
	},
	errorDateContainerStyle: {
		backgroundColor: 'white',
		height: deviceHeight * 0.07,
		borderWidth: 1,
		borderRadius: 10,
		width: '100%',
		justifyContent: 'center',
		borderColor: 'red'
	}
};

const mapStateToProps = (state) => ({
    error: state.profile.error,
    loading: state.profile.loading,
    text: state.text,
});

export default connect(mapStateToProps, { userCreate })(UserCreateScreen);
