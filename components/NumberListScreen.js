import React, { Component } from 'react';
import { View } from 'react-native';
import NumberList from './NumberList';
import Background from './Background';
import Controller from './Controller';
// import Overlay from './Overlay';
// import { loadAudio } from '../helpers/audio';
// import Geocoder from 'react-native-geocoder';
// import { getCity } from '../helpers/geocoder';


class NumberListScreen extends Component {
    // playAudio = async () => {
	// 	this.audio = new Expo.Audio.Sound();
	// 	await this.audio.loadAsync(require("../data/audio/call.m4a"));
	// 	await this.audio.playAsync();
	// 	if(this.audio != null) {
	// 		this.audio.playAsync();
	// 	}
	// 	else {
	// 	    console.log("Error playing audio");
	// 	}
    // }

    // constructor(props) {
	// 	super(props);
    // }

    // componentWillUnmount()
    // {
	// //this.audio.unloadAsync();
    // }


    render() {
	const { containerStyle, overlayStyle, videoStyle, controllerStyle } = styles;
	const { question, backClick, nextClick } = this.props;

	return (
		<View style={containerStyle}>
			<Background
				source={require('../assets/images/asset3.png')}
			/>
			<View style={overlayStyle} pointerEvents='none'>
				{/*}<Overlay title = "Call for help" /> {*/}
			</View>
			<View style={videoStyle}>
				<NumberList />
			</View>
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
	},
	controllerStyle: {
		flex: 30
	},
	overlayStyle: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		zIndex: 1
	},
	videoStyle: {
		flex: 70, 
		paddingRight: 10, 
		paddingLeft: 10,
	}
};

export default NumberListScreen;

