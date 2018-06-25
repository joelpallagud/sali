import React from 'react';
import { Image } from 'react-native';
import { LOGO } from '../assets/images';

const Logo = () => {
    const { logoStyle } = styles;

    return (
        <Image
            style={logoStyle}
            source={LOGO}
        />
    );
};

const styles = {
    logoStyle: {
        width: 100,
        height: 100,
    }
};

export default Logo;
