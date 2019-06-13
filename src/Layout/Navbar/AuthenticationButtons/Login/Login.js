import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
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

export default Login;
