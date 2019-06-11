import React, { Component, Fragment } from 'react';
import Login from './Login/Login';
import Cadastrar from './Cadastrar/Cadastrar';
import User from './User/User';

class AuthenticationButtons extends Component {
  render() {
    return (
      <Fragment>
        <div className="level-item">
          <div className="field is-grouped">
            <Login />
            <Cadastrar />
            <User />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AuthenticationButtons;
