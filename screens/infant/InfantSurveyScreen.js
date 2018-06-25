import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { SURVEY_VID, SURVEY_AUDIO } from '../../data';

class InfantSurveyScreen extends Component {
    backClick = () => {
        this.props.navigation.navigate('InfantCall',{ isNotSafe: true});
    }

    nextClick = () => {
        this.props.navigation.navigate('InfantConsciousCheck',{ isNotSafe: false});
    }

    render() {
        const { survey } = this.props.text;

        return (
            <VideoScreen 
                text={survey}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={SURVEY_VID}
                audio={SURVEY_AUDIO}
                title="Survey the Area"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(InfantSurveyScreen);
