import React, { Component } from 'react';
import Tilt from 'react-tilt';
import './Card.css';

export default class Card extends Component {
    render () {
    return (
        <div>
            <Tilt className="Tilt container" options={{ max : 25 }} >
                <div className="Tilt-inner">
                <div id="greeting">
                    <h3 id="greet1">This Thanksgiving, we invite you to join us via Zoom Cloud meeting and give thanks for having such wonderful people in our lives!</h3>
                </div>
                
                <div id="info">
                    <div id="when">
                        <h3>November 26th, 2020</h3>
                        <h2>at 2:30pm</h2>
                    </div>
                    <div id='how'>
                        <h3>An awesome family filled <span className='jump'>Zoom Cloud Meeting</span></h3>
                        <h4 id="greet2"> Please Click the button at the bottom to confirm this invitation was recieved and your attendance will be present</h4>
                    </div>
                </div>

            
            
                </div>
            </Tilt>
        </div>
        );
    }
}