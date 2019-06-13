import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class LoginButton extends Component {
  render() {
    return (
      <Fragment>
        <div className="control">
          <Link className="button is-link is-rounded" to="/login">
            Login
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default LoginButton;
