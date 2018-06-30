import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { COMPRESS_VID, COMPRESS_AUDIO } from '../../data';

class CompressScreen extends Component {
    backClick = () => {
        this.props.navigation.navigate('CPRCall');
    }

    nextClick = () => {        
        const { params } = this.props.navigation.state;
        const { noBreath, noPulse, index } = params;

        if (noBreath) {
            this.props.navigation.navigate('Breathing',{ index, noBreath, noPulse });
        } else {
            this.props.navigation.navigate('Ambulance');
        }
    }
    
    render() {
        const { compress, CPRcompress } = this.props.text;
        const { noBreath } = this.props.navigation.state.params;
        
        return (
            <VideoScreen 
                text={(noBreath) ? CPRcompress : compress}
                backClick={this.backClick}
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
