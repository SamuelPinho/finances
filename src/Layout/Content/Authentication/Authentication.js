import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastro from './Cadastro/Cadastro';
import Login from './Login/Login';

class Authentication extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/login" component={Login} />
        </Switch>
      </Fragment>
    );
  }
}

export default Authentication;
