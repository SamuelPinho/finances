import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class RegisterButton extends Component {
  render() {
    return (
      <Fragment>
        <div className="control">
          <Link to="/register" className="button is-light is-inverted is-rounded">
            Register
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default RegisterButton;
