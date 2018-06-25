import React, { Component } from 'react';  
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import QuestionScreen from '../../components/QuestionScreen';


class ChildScreen extends Component {
    noClick = () => {
        this.props.navigation.navigate('Drowning');
    }

    yesClick = () => {
        this.props.navigation.navigate('CPRSurvey');
    }
    
    render() {
        const { childQuestion } = this.props.text;

        return (
            <QuestionScreen 
                question={childQuestion}
                backClick={this.noClick}
                nextClick={this.yesClick}
            />
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.subtitles);

    return {
        text: state.text,
        subtitles: state.subtitles,
    };
};

export default connect(mapStateToProps)(ChildScreen);
