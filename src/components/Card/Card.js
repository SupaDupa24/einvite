import React, { Component } from 'react';
import './Card.css'
import Tilt from 'react-tilt';


export default class Card extends Component {
    render () {
    return (
        <div>
            <Tilt className="Tilt container br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" options={{ max : 25 }} >
                <div className="Tilt-inner">
                <div id="greeting">
                    <h3 id="greet1">This Christmas, we invite<span className='green'>YOU</span> to join us via Zoom Cloud meeting and Celebrate Christmas in a new way!</h3>
                </div>
                
                <div id="info">
                    <div id="when">
                        <h3>December 23, 2020</h3>
                        <h2>at 2:30pm</h2>
                    </div>
                    <div id='how'>
                        <h3>An awesome family filled <span className='jump'>Zoom Cloud Meeting</span></h3>
                        <h3 id="greet2"> Please Click the button at the bottom to confirm this invitation was recieved and your attendance will be present</h3>
                        <h2>....see ya there</h2>
                    </div>
                </div>
                </div>
            </Tilt>
        </div>
        );
    }
}