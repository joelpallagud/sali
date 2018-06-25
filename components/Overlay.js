import React, { Component } from 'react';
import { 
    Text,
    Animated,
    // Easing
} from 'react-native';
import Fonts from '../constants/Fonts';
// import { showSubtitles } from '../actions';

class Overlay extends Component {
    constructor() {
        super();
        this.easingValue = new Animated.Value(0);
        // this.state = {
        //     line: "",
        //     length: 0,
        //     count: 0,
        //     totLen: 0,
        // }
    }
    // getNewLine = () => {
	//     return this.props.subtitles[this.state.count].text
    // }
    // getNewLength =() =>{
	//     return this.props.subtitles[this.state.count].duration
    // }

    // getTotalLength = () => {
	//     var tot = 0;
	//     for (i = 0; i < this.props.subtitles.length; i++) {
    //         tot = tot + this.props.subtitles[i].duration
    //     }
	//     return tot
    // }

    // incrementCount = () =>{
	//     return this.state.count + 1
    // }

    // repeatSubs = () =>{
	//     if(this.props.subtitles.length > this.state.count) {
	//         this.setState({
	// 	        line: this.getNewLine(),
	// 	        count: this.incrementCount(),
    //             length: this.getNewLength(),
    //         })
	//     }	
    // }

    componentDidMount() {
        // this.setState({
        //     line: this.getNewLine(),
        //     count: this.incrementCount(),
        //     totLen: this.getTotalLength(),
        //     length: this.getNewLength(),
        // })
    }

    componentDidMount() {
        this.ease();
    // this.interval = setInterval( () => {this.repeatSubs()}, this.state.length)
    }

    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    ease() {
        Animated.timing(
            this.easingValue,
                {
                    toValue: 1,
                    duration: 2000
                    // duration: this.state.totLen,
                }
            ).start(() => this.ease());
    }

    render() {
        const {
            titleStyle,
            // subsStyle
        } = styles;

        const opacity = this.easingValue.interpolate({
            inputRange: [0, 0.7, 0.9, 0.99, 1],
            outputRange: [0.8, 0.8, 0.1, 0, 0]
        });
        
        const move = this.easingValue.interpolate({
            inputRange: [0, 0.7, 0.9, 0.99, 1],
            outputRange: [0, 0, 0, 0, 2000]
        });

        return (
            <Animated.View
                style={{
                    flex: 1,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    opacity,
                    transform: [{ translateX: move }]
                }}
            >
                <Text style={titleStyle}>
                    { this.props.title }
                </Text>
            {/* <Text style= { subsStyle }>
		            { this.state.line }
		        </Text> */}
            </Animated.View>
        );
    }
}

const styles = {
    subsStyle: {
        fontSize: Fonts.large,
        color: 'white',

    },
    titleStyle: {
        fontSize: Fonts.xlarge,
        color: 'white',
        textAlign: 'center'
    }
};

export default Overlay;
