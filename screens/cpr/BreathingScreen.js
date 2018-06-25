import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { BREATH_VID, BREATH_AUDIO } from '../../data';

class BreathingScreen extends Component {
    backClick = () => {
        this.resetNavigate('Home');
    }

    nextClick = () => {
        const { params } = this.props.navigation.state;
        const { noBreath, noPulse, index } = params;

        if (index === 5) {
            this.props.navigation.navigate('InfantPulseCheck');
        } else if (noPulse) {
            this.props.navigation.navigate('InfantCompress',{ index: index + 1, noBreath, noPulse });
        } else {
            this.props.navigation.navigate('Ambulance');
        }
    }

    render() {
        const { breathing, justBreathing } = this.props.text;
        const { noPulse } = this.props.navigation.state.params;

        return (
            <VideoScreen 
                text={(noPulse) ? breathing : justBreathing}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={BREATH_VID}
                audio={BREATH_AUDIO}
                title="Mouth to Mouth Resuscitation"
            />
        );
    }
}

const mapStateToProps = (state) => ({
        text: state.text,
    });

export default connect(mapStateToProps)(BreathingScreen);
