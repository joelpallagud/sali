import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { INFANT_COMPRESS_VID, INFANT_COMPRESS_AUDIO } from '../../data';

class InfantCompressScreen extends Component {
    backClick = () => {
        this.props.navigation.navigate('InfantCall');
    }

    nextClick = () => {        
        const { params } = this.props.navigation.state;
        const { noBreath, noPulse, index } = params;

        if (noBreath) {
            this.props.navigation.navigate('InfantBreathing',{ index, noBreath, noPulse });
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
                video={INFANT_COMPRESS_VID}
                audio={INFANT_COMPRESS_AUDIO}
                title="Compress the Chest"
                isCPR
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(InfantCompressScreen);
