import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Background from '../../components/Background';
import HeaderText from '../../components/HeaderText';
import { LOGO } from '../../assets/images';
import { deviceWidth, deviceHeight } from '../../api/dimensions';
import { allowsLocation } from '../../actions';


class GetLocationScreen extends Component {
    yesHandleClick = async () => {
        await this.props.allowsLocation({ allowLocation: true });
        console.log(this.props.profile);
        this.props.navigation.navigate('PostRegistration');
    }
    noHandleClick = async () => {
        await this.props.allowsLocation({ allowLocation: false });
        console.log(this.props.profile);
        this.props.navigation.navigate('PostRegistration');
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
                    <Text> Allow to share location</Text>
                    <Button 
                        title={ 'yes' }
                        onPress={ this.yesHandleClick }
                    />
                    <Button 
                        title={ 'no' }
                        onPress={ this.noHandleClick }
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
    const { text, profile } = state;

    return { text, profile }
};

export default connect( mapStateToProps, { allowsLocation } )( GetLocationScreen );
