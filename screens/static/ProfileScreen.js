import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import UserInfo from '../../components/UserInfo';

import firebase from '../../api/firebase';
import { logout, userFetch } from '../../actions';
import { ICON_PROFILE } from '../../assets/images';
import { deviceHeight } from '../../api/dimensions';


class ProfileScreen extends Component {
    static navigationOptions = {
	tabBarLabel: 'Profile',
		tabBarIcon: () => (
			<Image
				source={ICON_PROFILE}
				style={{ resizeMode: 'contain', width: 25, height: 25 }}
			/>
		),
	}

	state = {
		user: null,
	}

	componentDidMount() {
		const { user } = this.props;
		if (user) {
			this.props.userFetch(user)
		}
		// console.log('this.state.user');
		// console.log(this.state.user);
		// console.log('this.props.user');
		// console.log(this.props.user);
		// console.log('this.props.profile');
		// console.log(this.props.profile);
		
		// firebase.auth().onAuthStateChanged((user) => {
		// 	if (user != null) {
		// 		this.setState({ user });
		// 		this.props.userFetch();
		// 	} else {
		// 		console.log(user);
		// 	}
		// });
	}

	redirectLogin = () => {
		this.props.navigation.navigate('Signin');
	}
	
	redirectProfile = () => {
		this.props.navigation.navigate('UserInfo');
	}

    renderInfo = () => {
		const { user, details }	= this.props;
		if (user && details) {
			return (
				<UserInfo 
					name={details.name}
					city={details.address}
					email={user.email}
					number={details.phone}
				/>
			);
		} else if (!details && user) {
			return (
				<UserInfo 
					name="Not set"
					city="Not set"
					email={user.email}
					number="Not set"
				/>
			);
		}
}

    render() {
		const { containerStyle, headerContainerStyle } = styles;
		const { user, logout } = this.props;
        return (
            <View style={containerStyle}>
				{/* <Background
		            source={ require('../../assets/images/asset3.png') }
				/> */}
				<Logo />
				<View style={headerContainerStyle} >
					{this.renderInfo() }
					{ user &&
						<Button 
							title="Logout"
							onPress={logout}
						/>
					}
					{ user &&
						<Button 
							title="Update info"
							onPress={this.redirectProfile}
						/>
					}
				</View>
				{ !user &&
					<Button 
						title="Login"
						onPress={this.redirectLogin}
					/>
				}	
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center', 
		backgroundColor: 'white',
    },
    headerContainerStyle: {
		alignItems: 'center', 
		justifyContent: 'space-around',
    }
};

const mapStateToProps = (state) => ({
	text: state.auth,
	user: state.auth.user,
	profile: state.profile,
	details: state.profile.data
});
	
export default connect(mapStateToProps, { logout, userFetch })(ProfileScreen);
