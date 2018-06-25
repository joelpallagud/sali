import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { INFANT_CHECKPULSE_VID, INFANT_CHECKPULSE_AUDIO } from '../../data';

class InfantPulseCheckScreen extends Component {
    backClick = () => {
        this.props.navigation.navigate('InfantAirCheck',{ noPulse: true});
    }

    nextClick = () => {
        this.props.navigation.navigate('InfantAirCheck',{ noPulse: false});
    }
    
    
    render() {
        const { pulseCheck } = this.props.text;
        
        return (
            <VideoScreen 
                text={pulseCheck}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={INFANT_CHECKPULSE_VID}
                audio={INFANT_CHECKPULSE_AUDIO}
                title="Check for Pulse"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(InfantPulseCheckScreen);
