import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withAuthentication } from 'Services/Session';
import Questions from './Questions/Questions';
import Title from './Title/Title';
import Authentication from './Authentication/Authentication';
import Home from './Home/Home';
import Operations from './Operations/Operations';
import User from './User/User';

class Content extends Component {
  render() {
    return (
      <Fragment>
        <div className="box">
          <Title />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/operacoes" component={Operations} />
            <Route path="/cadastro/pergunta" component={Questions} />
            <Route path="/usuario" component={User} />
            <Route path="/" component={Authentication} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default withAuthentication(Content);
