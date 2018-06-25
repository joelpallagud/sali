import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableHighlight, Text, StyleSheet, Modal } from 'react-native';
import TutorialMessage from '../components/TutorialMessage';
import { setTutorialViewed } from '../actions/TutorialActions';
import Fonts from '../constants/Fonts';

class TutorialComponent extends Component {
    constructor(props) {
		super(props);
		this.state = {
			currentMsg: 0,
			renderTutorial: true,
		};
    }

    
	onMessage= (n) => this.state.currentMsg == n;

	nextSlide = () => {
		if (this.state.currentMsg === 1) {
			this.closeTutorial();
		} else {
			this.setState({ currentMsg: this.state.currentMsg + 1 });
		}	
    }
	
	closeTutorial = () => {
		this.props.tutorialViewed();
		this.setState({ renderTutorial: false });
    }

    render() {
		return (
			<Modal 
				visible={this.state.renderTutorial}
				transparent
				animationType={'fade'}
				onRequestClose={() => this.closeTutorial()}
			>
				<View style={styles.overlay}>
					<TouchableHighlight 
						onPress={() => { this.closeTutorial(); }}
					>
						<Text>
							Close
						</Text>
					</TouchableHighlight>
					<View style={styles.tutorial}>
						<TutorialMessage 
							message="Tap to learn more about CPR and Sudden Cardiac Arrest Emergencies."
							isVisible={this.onMessage(1)}
						/>
						<TutorialMessage 
							message="This is the Emergency Tab. Look at the illustration on each emergency card. Click on the emergency card you think you need." 
							isVisible={this.onMessage(0)}
						/>
					</View>
					<TouchableHighlight 
						style={styles.nextButton} 
						onPress={() => { this.nextSlide(); }}
					>
						<Text style={styles.buttonText}>
							Next
						</Text>
					</TouchableHighlight>
				</View>
			</Modal>
		);
    }
}

const styles = StyleSheet.create({
    overlay: {
		flex: 1,
		opacity: 0.8,
		backgroundColor: 'black',
		position: 'absolute',
		height: '100%',
		width: '100%',
    },
    tutorial: {
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
		zIndex: 2,
		height: '100%',
		width: '100%',
		position: 'absolute',
    },
    info: {
		backgroundColor: 'white',
    },
    nextButton: {
		bottom: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		opacity: 0,
		zIndex: 5,
    },
    buttonText: {
		padding: 15,
		fontSize: Fonts.medium,
		textAlign: 'center',
    }
});

const mapStateToProps = (state) => ({
	tutorial: state.tutorial,
});
const mapDispatchToProps = (dispatch) => ({
	tutorialViewed: () => dispatch(setTutorialViewed())
});

export default connect(mapStateToProps, mapDispatchToProps)(TutorialComponent);
