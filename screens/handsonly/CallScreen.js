import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import NumberListScreen from '../../components/NumberListScreen';


class CallScreen extends Component {
    backClick = () => {
        this.props.navigation.navigate('Home');
    }

    nextClick = () => {
        const { isNotSafe } = this.props.navigation.state.params;
        if (isNotSafe) {
            this.props.navigation.navigate('Ambulance');
        } else {
            this.props.navigation.navigate('Compress');
        }
    }
    
    render() {
	const { call } = this.props.text;

	return (
		<NumberListScreen 
			question={call}
			backClick={this.backClick}
			nextClick={this.nextClick}
		/>
	);
    }
}

const mapStateToProps = (state) => {
    const { text } = state;

    return { text };
};

export default connect(mapStateToProps)(CallScreen);

