import React, { Component } from 'react'; 
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import QuestionScreen from '../../components/QuestionScreen';


class DrowningScreen extends Component {
    noClick = () => {
        this.props.navigation.navigate('Survey');
    }

    yesClick = () => {
        this.props.navigation.navigate('CPRSurvey');
    }
    
    render() {
        const { drowningQuestion } = this.props.text;

        return (
            <QuestionScreen 
                question={drowningQuestion}
                backClick={this.noClick}
                nextClick={this.yesClick}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
    subtitles: state.subtitles,
});

export default connect(mapStateToProps)(DrowningScreen);
