import React from 'react';
import Tilt from 'react-tilt';
import './Banner.css';

const Banner = () => {
    return (
        <Tilt className="Tilt container banner br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" options={{ max : 25 }} >
                <div className="Tilt-inner">
                        <h1>Merry Christmas!!</h1>
                </div>
        </Tilt>
        );
    }

export default Banner;
