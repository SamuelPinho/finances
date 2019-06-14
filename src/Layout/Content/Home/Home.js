import React, { Component, Fragment } from 'react';
import { withPageTitle } from 'Services/PageTitle';

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

export default withPageTitle('Home')(Home);
