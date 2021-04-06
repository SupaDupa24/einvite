import React from 'react';
import Tilt from 'react-tilt';
import cheers from './cheers.svg';
import './Banner.css';

export default class Banner extends React.Component {
    constructor(props){
        super(props)
        this.state= {isBanner:false};
    }
            render(){ 
            return (
        <Tilt className="Tilt container banner br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" options={{ max : 25 }} >
                <div className="Tilt-inner">
                <img 
                    src={cheers}
                    alt='cheers'
                    />
                        <h1>Merry Christmas{this.props.name}!!</h1>
                <img
                    src={cheers}
                    alt='cheers'
                    />

                </div>
        </Tilt>
        );
    }
}

