import React from 'react';
import Button from '@material-ui/core/Button';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        number:'',
        
      };
    }

  nameChange = (event) => {
    this.setState({name: event.target.value});
    }
  
  numberChange = (event) => {
      this.setState({number: event.target.value});
    }

    onSubmitInvite = () => {
      fetch('http://127.0.0.1:3000/invite', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.state.name,
          number: this.state.number
        })
      })
        .then(response => response.json())
        .then(user => {
          if (user.id) {
            this.props.loadUser(user)
            this.props.onRouteChange('thanks')
          }
        })
    }
    render() {
      return (
        <article className="container br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="formTitle f1 fw6 ph0 mh0">RSVP</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name:</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.nameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="number">Number:</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                  type="text"
                  name="number"
                  id="number"
                  onChange={this.numberChange}
                />
              </div>
            </fieldset>
            <Button variant="contained" color="secondary">
              <button
                onClick={this.onSubmitInvite}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Submit"
              >Submit</button>
            </Button>
                                      
          </div>
        </main>
      </article>
    );
  }
}

  export default Form;