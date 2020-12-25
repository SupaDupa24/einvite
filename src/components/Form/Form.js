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
      let name = event.target.value;
      let number = event.target.value;
      this.setState({[name]: number});
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
            this.props.thanksModal(user)
          }
        })
    }
    render() {
      return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">RSVP</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.nameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="number">Number</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                  type="number"
                  name="number"
                  id="number"
                  onChange={this.numberChange}
                />
              </div>
            </fieldset>
            <div>
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

  export default Form;