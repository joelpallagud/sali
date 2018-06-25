import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Fonts from '../constants/Fonts';

class SubtitleComponent extends Component {
	state = {
		line: '',
		length: 1000,
		count: 0,
	}   
	
	componentDidMount() {
		this.interval = setInterval(
			() => { this.repeatSubs(); }, this.state.length
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	
	getNewLine = () => this.props.subtitles[this.state.count].text
	getNewLength = () => this.props.subtitles[this.state.count].duration
	incrementCount = () => this.state.count + 1
	
	repeatSubs = () => {
		if (this.props.subtitles.length > this.state.count) {
			this.setState({
				line: this.getNewLine(),
				count: this.incrementCount(),
				length: this.getNewLength(),
			});
		} else {
			this.setState({
				count: 0,
			});
		}
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.subtitles}>
					{ this.state.line }
				</Text>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0)'
	},
	subtitles: {
		textAlign: 'center',
		fontSize: Fonts.medium 
	} 
}; 

export default SubtitleComponent;
