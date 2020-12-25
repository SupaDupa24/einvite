import React from 'react';
import Card from './components/Card/Card';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Thanks from './components/Thanks/Thanks';
import Particles from 'react-tsparticles';
import particlesOptions from "./particles.json";
import './App.css';



const initialState = {
    name:'',
    number:'',

}



export default class App extends React.Component {
  constructor(){
    super();
    this.state = {initialState}
  }



loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    name: data.name,
    number: data.number
  }})
}







  render() {
    return (
      <div className='App'>
       <Particles
          id="tsparticles"
          className='particles'
          options={particlesOptions} />
        <Banner />
        <Card />
        <Form />
        <Thanks />
      </div>
    );
  }
}