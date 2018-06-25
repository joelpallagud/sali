import React, { Component } from 'react'; 
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import QuestionScreen from '../../components/QuestionScreen';


class InfantScreen extends Component {
    noClick = () => {
        this.props.navigation.navigate('Child');
    }

    yesClick = () => {
        this.props.navigation.navigate('InfantSurvey');
    }
    
    render() {
        const { infantQuestion } = this.props.text;

        return (
            <QuestionScreen 
                question={infantQuestion}
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

export default connect(mapStateToProps)(InfantScreen);
