import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Video } from 'expo';

class VideoComponent extends Component {
    state = {
		shouldPlay: false,
		isVideoMuted: false 
	};

    componentDidMount() {
        this.timeout = setTimeout(this.playVideo, 3000);
	}
	
    componentWillUnmount() {
		this.pauseVideo;
		clearTimeout(this.timeout);
	}
	
	playVideo = () => {
        this.setState({ shouldPlay: true });
    }
    pauseVideo = () => {
        this.setState({ shouldPlay: false });
    }

    videoError = () => {
		Alert.alert(
			'Video playback error',
			'There was an error playing the video',
			[{
				text: 'Ok',
				style: 'default' 
			}]
		);
		console.log('Error loading video');
    }

    render() {
        const { videoStyle } = styles;
        
        return (
			<Video
				source={this.props.source}
				volume={1.0}
				resizeMode={'cover'}
				style={videoStyle}
				isLooping
				isMuted
				shouldPlay
				isLoaded
				onError={this.videoError}
			/>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: 'red',
    },
    videoStyle: {
		// position: 'absolute',
		// top:0,
		// right:0,
		// bottom:0,
		// left:0,
		flex: 1
    }
};

export default VideoComponent;
