import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Particles from 'react-particles-js';
import './App.css';


const particlesOptions = {
  "particles": {
      "number": {
          "value": 160,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 10,
          "random": true
      },
      "move": {
          "direction": "bottom",
          "out_mode": "out"
      },
      "line_linked": {
          "enable": false
      }
  },
  "interactivity": {
      "events": {
          "onclick": {
              "enable": true,
              "mode": "remove"
          }
      },
      "modes": {
          "remove": {
              "particles_nb": 10
          }
      }
  }
}

const initialState = {
    name:'',
    number:'',

}



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {initialState}
  }

nameChange = (event) => {
    this.setState({name: event.target.value});
  }

numberChange = (event) => {
    this.setState({number: event.target.value});
  }





  render() {
    return (
      <div className='App'>
       <Particles
          className='particles'
          params={{particlesOptions}} />
        <Header />
        <Card />
        <Form />
      </div>
    );
  }
}