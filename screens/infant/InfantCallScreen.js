import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import NumberListScreen from '../../components/NumberListScreen';


class InfantCallScreen extends Component {
    backClick = () => {
        this.props.navigation.navigate('Home');
    }

    nextClick = () => {
        const { isNotSafe } = this.props.navigation.state.params;
        if (isNotSafe) {
            this.props.navigation.navigate('Ambulance');
        } else {
            this.props.navigation.navigate('InfantPulseCheck');
        }
    }

    render() {
    const { call } = this.props.text;
    console.log(this.props.navigation.state.params);

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

export default connect(mapStateToProps)(InfantCallScreen);

