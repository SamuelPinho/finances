import React, { Component, Fragment } from 'react';
import Cadastro from './Cadastro/Cadastro';
import Login from './Login/Login';

class Authentication extends Component {
  render() {
    return (
      <Fragment>
        {/* <Cadastro /> */}
        <Login />
      </Fragment>
    );
  }
}

export default Authentication;
