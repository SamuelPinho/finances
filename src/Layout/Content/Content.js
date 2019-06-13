import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withAuthentication } from 'Services/Session';
import Questions from './Questions/Questions';
import Title from './Title/Title';
import Authentication from './Authentication/Authentication';
import Home from './Home/Home';

class Content extends Component {
  render() {
    return (
      <Fragment>
        <div className="box">
          <Title />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/" component={Authentication} />
            <Route path="/cadastro/pergunta" component={Questions} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default withAuthentication(Content);
