import React, { Component, Fragment } from 'react';
import { withFirebase } from 'Services/Firebase';

class LogoutButton extends Component {
  handleClick = event => {
    event.preventDefault();

    this.props.firebase.doSignOut();
  };

  render() {
    return (
      <Fragment>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="dropdown-item has-text-danger" onClick={this.handleClick}>
          Logout
        </a>
      </Fragment>
    );
  }
}

export default withFirebase(LogoutButton);
