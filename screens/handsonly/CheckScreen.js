import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { CHECK_VID, CHECK_AUDIO } from '../../data';

class CheckScreen extends Component {
    backClick = () => {
        this.props.navigation.navigate('Call',{ isNotSafe: false});
    }

    nextClick = () => {
        this.props.navigation.navigate('Call',{ isNotSafe: true});
    }
    
    render() {
        const { check } = this.props.text;
        
        return (
            <VideoScreen 
                text={check}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={CHECK_VID}
                audio={CHECK_AUDIO}
                title="Check for Consciousness"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
    subtitles: state.subtitles,
});

export default connect(mapStateToProps)(CheckScreen);
