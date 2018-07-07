import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { COMPRESS_VID, COMPRESS_AUDIO } from '../../data';

class CompressScreen extends Component {
    backClick = () => {
        this.props.navigation.navigate('Call');
    }

    nextClick = () => {
        this.props.navigation.navigate('Home');
    }

    
    render() {
        const { compress } = this.props.text;
        
        return (
            <VideoScreen 
                text={compress}
                nextClick={this.nextClick}
                video={COMPRESS_VID}
                audio={COMPRESS_AUDIO}
                title="Compress the Chest"
                hasBeat
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(CompressScreen);
