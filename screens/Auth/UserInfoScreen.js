import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import Input from '../../components/Input';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Background from '../../components/Background';
import { LOGO } from '../../assets/images';
import { ICON_NAME, ICON_GIFT, ICON_NUMBER, ICON_LOCATION } from '../../assets/icons';
import { userCreate } from '../../actions';
import firebase from '../../api/firebase';
import { deviceWidth } from '../../api/dimensions';

class UserInfoScreen extends Component {
    backClick = () => {
		this.props.navigation.navigate('Home');
    }

    state ={
	    name: '',
	    birthday: '',
	    phone: '',
	    address: '',
	    error: '',
	}

    submit= () => {
		this.props.userCreate(this.state.name, this.state.birthday, this.state.phone, this.state.address);
		console.log(this.props.error);
    }


    render() {
	return (
	    <View style={styles.container}>
			<Background
			    source={require('../../assets/images/asset8.png')}
			/>
                <Image
                    style={styles.logo}
                    source={LOGO}
                />
		<View>
		    <ActivityIndicator size="small" color="#00ff00" animating={this.props.loading} />
		    <Text> { this.props.error.message} </Text>
		    <View style={styles.input}>
			<Input
				style={styles.input}
			    placeholder="Name"
				onChangeText={(name) => this.setState({ name })}
				icon={ICON_NAME}
			/>
		    </View>
		    <View style={styles.input}>
			<Input
				style={styles.input}
			    placeholder="Birthday"
				onChangeText={(birthday) => this.setState({ birthday })}
				icon={ICON_GIFT}
			/>
		    </View>
		    <View style={styles.input}>
			<Input
				style={styles.input}
			    placeholder="Phone"
				onChangeText={(phone) => this.setState({ phone })}
				icon={ICON_NUMBER}
			/>
		    </View>
		    <View style={styles.input}>
			<Input
				style={styles.input}
			    placeholder="City"
				onChangeText={(address) => this.setState({ address })}
				icon={ICON_LOCATION}
			/>
		    </View>
		    <View style={styles.input}>
			<Button 
			    title="Submit"
			    onPress={this.submit}
			/>
		    </View>
		    <View style={styles.input}>
			<Button 
			    title="Cancel"
			    onPress={this.backClick}
			/>
		    </View>
		</View>
	    </View>
	);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    logo: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 30
    },
    input: {
		paddingBottom: 10,
		width: deviceWidth * 0.75,
		alignItems: 'center'
    },
});

const mapStateToProps = (state) => ({
		error: state.profile.error,
		loading: state.profile.loading,
		text: state,
		user: state.auth.user,
    });

export default connect(mapStateToProps, { userCreate })(UserInfoScreen);
