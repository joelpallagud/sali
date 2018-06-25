import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { INFANT_CHECK_VID, INFANT_CHECK_AUDIO } from '../../data';

class InfantConsciousCheckScreen extends Component {
    backClick = () => {
        this.props.navigation.navigate('InfantCall',{ isNotSafe: false});
    }

    nextClick = () => {
        this.props.navigation.navigate('InfantCall',{ isNotSafe: true});
    }
    
    
    render() {
        const { check } = this.props.text;
        
        return (
            <VideoScreen 
                text={check}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={INFANT_CHECK_VID}
                audio={INFANT_CHECK_AUDIO}
                title="Check for Consciousness"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(InfantConsciousCheckScreen);
