import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Button from '../../components/Button';
import Background from '../../components/Background';
import HeaderText from '../../components/HeaderText';
import { LOGO } from '../../assets/images';
import { deviceWidth, deviceHeight } from '../../utils/dimensions';


class PostRegistrationScreen extends Component {
    handleClick = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        const { postReg, postRegButton } = this.props.text;
        const { containerStyle, bodyContainerStyle, headerStyle, logoStyle } = styles;

        return (
            <View style={ containerStyle } >
		        <Background
		            source={ require('../../assets/images/asset3.png') }
		        />
                <Image
                    style={ logoStyle }
                    source={ LOGO }
                />
                <View style={ bodyContainerStyle }>
                    <HeaderText text={ postReg } />
                    <Button 
                        title={ postRegButton }
                        onPress={ this.handleClick }
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    logoStyle: {
        width: deviceHeight*0.1,
        height: deviceHeight*0.1,
        position: 'absolute',
        top: deviceHeight*0.075
    },
    bodyContainerStyle: {
        alignItems: 'center', 
        width: deviceWidth*0.8
    }
}
const mapStateToProps = ( state ) => {
    const { text } = state;

    return { text }
};

export default connect( mapStateToProps )( PostRegistrationScreen );
