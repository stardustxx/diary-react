import React, {Component} from 'react';
import Nav from '../../Components/Nav/Nav';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import {Link} from 'react-router';
import './SignUp.css';

class SignUp extends Component {

  render() {
    return (
      <div className='SignUp'>
        <Nav className='nav'/>
        <div className="body">
          <div className="sign-up-container">
            <SignUpForm/>
            <Link to='/login'>Already a user? Log in here!</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;