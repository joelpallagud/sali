import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { CHECKPULSE_VID, CHECKPULSE_AUDIO } from '../../data';

class PulseCheckScreen extends Component {
    backClick = () => {
        this.props.navigation.navigate('AirCheck',{ noPulse: true});
    }

    nextClick = () => {
        this.props.navigation.navigate('AirCheck',{ noPulse: false});
    }
    
    
    
    render() {
        const { pulseCheck } = this.props.text;
        
        return (
            <VideoScreen 
                text={pulseCheck}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={CHECKPULSE_VID}
                audio={CHECKPULSE_AUDIO}
                title="Check for Pulse"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(PulseCheckScreen);
