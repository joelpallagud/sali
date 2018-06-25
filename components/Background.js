import React from 'react';
import { Image } from 'react-native';
import { deviceHeight, deviceWidth } from '../utils/dimensions';

const Background = ({ source }) => {
    const { backgroundStyle } = styles;

    return (
		<Image
			style={backgroundStyle}
			source={source}
		/>
    );
};

const styles = {
    backgroundStyle: {
        backgroundColor: '#fff',
		flex: 1,
		resizeMode: 'cover',
		position: 'absolute',
		width: deviceWidth,
		height: deviceHeight,
		justifyContent: 'center',
    }
};

export default Background;
