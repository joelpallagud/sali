import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { Audio } from 'expo';
import Background from './Background';
import Controller from './Controller';
import Controller2 from './Controller2';
import Controller3 from './Controller3';
import Overlay from './Overlay';
import Video from './Video';
import { CPR_BEAT } from '../data';

// import Subtitle from './Subtitle';
// import { loadAudio } from '../helpers/audio';
// import { showSubtitles } from '../actions';

class VideoScreen extends Component {
    state = {
        // subtitles: null,
        isLoaded: false
    }
    
    componentDidMount() {
        this.playAudio();
        (this.props.hasBeat) ? this.playBeat() : null
        // this._getSubtitles();

    }

    // _getSubtitles = async () => {
    //     await this.props.showSubtitles('Survey', 'English');
    //     this.setState({
    //         isLoaded: true,
    //     })
    // }

    componentWillUnmount() {
        // const { hasBeat } = this.props;
        
        clearInterval(this.interval);
        this.audio.unloadAsync();
        (this.props.hasBeat) ? this.beat.unloadAsync() : null
        // this.beat.unloadAsync();
    } 

    playAudio = async () => {
        const { audio } = this.props;

        this.audio = new Audio.Sound();
        await this.audio.loadAsync(audio, { isLooping: true });
        this.audio.playAsync();
    }

    playBeat = async () => {
        this.beat = new Audio.Sound();
        await this.beat.loadAsync(CPR_BEAT, { isLooping: true });
        this.beat.playAsync();
    }

    renderController = (backClick, nextClick, text) => {
		if (this.props.noOptions) {
			return (
				<Controller2 
                    nextOnPress={nextClick} 
                    question={text}
                />
			);
		} else {
			return (
				<Controller3 
                    backOnPress={backClick}  
                    nextOnPress={nextClick} 
                    question={text}
                />
			);
		}
}



    render() {
        const {
            video,
            backClick,
            nextClick,
            text,
            // subtitles,
            title }
        = this.props;
        const {
            containerStyle,
            controllerStyle,
            overlayStyle,
            // subtitleStyle,
            videoStyle
        } = styles;

        console.log('IM PLAYING');

        return (
            <View style={containerStyle}>
                {/* <Background
                    source={require('../assets/images/asset3.png')}
                /> */}
                <View style={overlayStyle} pointerEvents='none'>
                    {/* { this.state.isLoaded && */}
                        <Overlay 
                            title={title} 
                            // subtitles = {this.props.subtitles.survey.overlay} 
                        />
                    {/* } */}
                </View>
                <View style={videoStyle}>
                    <Video 
                        source={video}
                    />
                    {/* <View style={ subtitleStyle }>
                        { this.state.isLoaded &&
                            <Subtitle subtitles= { subtitles } />
                        }
                    </View> */}
                </View>
                    
                <View style={controllerStyle}>
                    { this.renderController(backClick, nextClick, text) }
                </View>
            </View>
            );
        }
    }

    const styles = {
        containerStyle: {
            flex: 1,
            // marginTop: (Platform.OS === 'android') ? 25 : 0
        },
        controllerStyle: {
            flex: 20
        },
        overlayStyle: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
        },
        subtitleStyle: {
            height: '15%',
        },
        videoStyle: {
            flex: 80, 
            justifyContent: 'flex-end',
            marginTop: 14,
            marginRight: 14,
            marginLeft: 14
        }
    };

export default VideoScreen;
