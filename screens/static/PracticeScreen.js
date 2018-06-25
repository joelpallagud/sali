import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import HeaderText from '../../components/HeaderText';
import BodyText from '../../components/BodyText';
import Logo from '../../components/Logo';


class PracticeScreen extends Component {
    static navigationOptions = {
	tabBarLabel: 'Practice CPR',
	tabBarIcon: () => (
        <Image
            source={require('../../assets/images/asset13.png')}
            style={{ resizeMode: 'contain', width: 25, height: 25 }}
        />
    ),
    };
    render() {
        const { containerStyle } = styles;
        const { practiceHeader, practiceBody, practiceButton } = this.props.text;

        return (
            <View style={containerStyle}>
                <Logo />
                <HeaderText text={practiceHeader} />
                <BodyText text={practiceBody} />
                <Button 
                    title={practiceButton} 
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center', 
        backgroundColor: 'white',
        justifyContent: 'space-around'
    },
    headerStyle: {
        justifyContent: 'space-around'
    }
};

const mapStateToProps = (state) => {
    const { text } = state;

    return { text };
};

export default connect(mapStateToProps)(PracticeScreen);
