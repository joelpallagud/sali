import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { showSubtitles } from '../../actions';
import { SURVEY_AUDIO, SURVEY_VID } from '../../data';

class SurveyScreen extends Component {
    backClick = () => {
        this.props.navigation.navigate('Call',{ isNotSafe: true});
    }

    nextClick = () => {
        this.props.navigation.navigate('Check');
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

export default connect(mapStateToProps, { showSubtitles })(SurveyScreen);
