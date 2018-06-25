import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { CHECKBREATH_VID, CHECKBREATH_AUDIO } from '../../data';

class AirCheckScreen extends Component {
    backClick = () => {
        const { params } = this.props.navigation.state;

        if (params.noPulse) {
            this.props.navigation.navigate('CPRCompress',{ index: 1, noBreath: true, noPulse: true });
        } else {
            this.props.navigation.navigate('Breathing',{ noBreath: true, noPulse: false });
        }
    }

    nextClick = () => {
        const { params } = this.props.navigation.state;

        if (params.noPulse) {
            this.props.navigation.navigate('CPRCompress',{ noBreath: false, noPulse: true });
        } else {
            this.props.navigation.navigate('Ambulance');
        }
    }

    render() {
        const { airCheck } = this.props.text;

        return (
            <VideoScreen 
                text={airCheck}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={CHECKBREATH_VID}
                audio={CHECKBREATH_AUDIO}
                title="Check for Breathing"
            />
        );
    }
}

const mapStateToProps = (state) => ({
        text: state.text,
    });

export default connect(mapStateToProps)(AirCheckScreen);


// import React, { Component } from 'react';
// import { NavigationActions } from 'react-navigation';
// import { connect } from 'react-redux';
// import VideoScreen from '../../components/VideoScreen';
// import { CHECKBREATH_VID, CHECKBREATH_AUDIO } from '../../data';

// class AirCheckScreen extends Component {
//     backClick = () => {
//         const resetAction = NavigationActions.reset({
//             index: 0,
//             actions: [
//                 NavigationActions.navigate({
//                     routeName: 'PulseCheck'
//                 })
//             ]
//         });	
//             this.props.navigation.dispatch(resetAction);
//     }

//     nextClick = () => {
//         const resetAction = NavigationActions.reset({
//             index: 0,
//             actions: [
//                 NavigationActions.navigate({
//                     routeName: 'CPRCall',
//                     params: { isNotSafe: false } 
//                 })
//             ]
//         });
//         this.props.navigation.dispatch(resetAction);
//     }
    
    
//     render() {
//         const { airCheck } = this.props.text;
        
//         return (
//             <VideoScreen 
//                 text={airCheck}
//                 backClick={this.backClick}
//                 nextClick={this.nextClick}
//                 video={CHECKBREATH_VID}
//                 audio={CHECKBREATH_AUDIO}
//                 title="Check for Breathing"
//             />
//         );
//     }
// }

// const mapStateToProps = (state) => ({
//     text: state.text,
// });

// export default connect(mapStateToProps)(AirCheckScreen);
