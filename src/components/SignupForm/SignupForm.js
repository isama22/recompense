import React, { Component } from 'react';
import './SignupForm.css';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };
  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/')
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }
  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }
  render() {
    return (
      <div className="signup-container">
        <header className="signup-header page-title">Sign Up</header>
        <form  onSubmit={this.handleSubmit} >
          <div>
            <div>
              <input className="signup-form"
                type="text" 
                placeholder="Name" 
                value={this.state.name} 
                name="name" 
                onChange={this.handleChange} 
              />
            </div>
          </div>
          <div>
            <div>
              <input className="signup-form"
                type="email" 
                placeholder="Email" 
                value={this.state.email} 
                name="email" 
                onChange={this.handleChange} 
              />
            </div>
          </div>
          <div>
            <div>
              <input className="signup-form"
                type="password" 
                placeholder="Password" 
                value={this.state.password} 
                name="password" 
                onChange={this.handleChange} 
              />
            </div>
          </div>
          <div>
            <div>
              <input className="signup-form"
                type="password" 
                placeholder="Confirm Password" 
                value={this.state.passwordConf} 
                name="passwordConf" 
                onChange={this.handleChange} 
              />
            </div>
          </div>
          <div className="buttons-div">
            <div className="buttons">
                <button className="signup-form button" disabled={this.isFormInvalid()}>Sign Up</button>
                &nbsp;&nbsp;
                <Link to='/' className="cancel">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SignupForm;