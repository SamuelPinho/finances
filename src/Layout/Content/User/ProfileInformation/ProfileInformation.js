import React, { Component, Fragment } from 'react';
import { withAuthorization } from 'Services/Session';

class ProfileInformation extends Component {
  render() {
    return (
      <Fragment>
        <h1>{this.props.authUser.email}</h1>
      </Fragment>
    );
  }
}

export default withAuthorization()(ProfileInformation);
