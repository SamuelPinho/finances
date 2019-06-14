import React, { Component, Fragment } from 'react';
import { withPageTitle } from 'Services/PageTitle';
import { compose } from 'recompose';
import { withAuthorization } from 'Services/Session';

class Home extends Component {
  componentDidMount() {
    this.props.setPageTitle('Home');
  }

  render() {
    return (
      <Fragment>
        <p>Bem vindo ao site</p>
      </Fragment>
    );
  }
}

export default compose(
  withPageTitle('Home'),
  withAuthorization()
)(Home);
