import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        value:'',
        
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.value;
      let num = event.target.value;
      this.setState({[nam]: num});
    }
    render() {
      return (
        <form>
        <h1>Thank you for Joining us{this.state.name} your text info is {this.state.number}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='name'
          onChange={this.myChangeHandler}
        />
        <p>Enter your number:</p>
        <input
          type='text'
          name='number'
          onChange={this.myChangeHandler}
        />
        <input 
          type='button'
          value='submit'


        />
        </form>
      );
    }
  }

  export default Form;