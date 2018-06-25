import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import UserInfo from '../../components/UserInfo';

import firebase from '../../firebase';
import { logout, userFetch } from '../../actions';
import { ICON_PROFILE } from '../../assets/images';
import { deviceHeight } from '../../utils/dimensions';


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
	
	constructor(props) {
		super(props);
		this.state = {
		user: null,
		};
	}

	state = {
		user: null,
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user != null) {
				this.setState({ user });
				this.props.userFetch();
			} else {
				console.log(user);
			}
		});
	}

	redirectLogin = () => {
		this.props.navigation.navigate('Signin');
	}
	
	redirectProfile = () => {
		this.props.navigation.navigate('UserInfo');
	}

    renderInfo = () => {		
		if (this.state.user && this.props.details) {
			return (
				<UserInfo 
					name={this.props.details.name}
					city={this.props.details.address}
					email={this.state.user.email}
					number={this.props.details.phone}
				/>
			);
		} else if (!this.props.details && this.state.user) {
			return (
				<UserInfo 
					name="Not set"
					city="Not set"
					email={this.state.user.email}
					number="Not set"
				/>
			);
		}
}

    render() {
		const { containerStyle, headerContainerStyle } = styles;
		const { user } = this.state;
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
							onPress={this.props.logout}
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
