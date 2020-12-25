import React from 'react';
import Tilt from 'react-tilt';
import './Banner.css';

const Banner = () => {
    return (
        <Tilt className="Tilt" options={{ max : 25 }} >
                <div className="Tilt-inner">
                        <h1>Merry Christmas!!</h1>
                </div>
        </Tilt>
        );
    }

export default Banner;
