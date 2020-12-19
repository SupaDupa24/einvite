import React from 'react';
import Tilt from 'react-tilt';
import './Header.css';

const Header = () => {
    return (
            <header className="container header" id="header">
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250, }} >
                        <div className="Tilt-inner">
                                <h1>Happy Thanksgiving!!</h1>
                        </div>
                </Tilt>
            </header>
        );
    }

export default Header;
