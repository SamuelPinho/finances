import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <Fragment>
        <div className="control">
          <Link
            to="/cadastro"
            className="button is-light is-inverted is-rounded"
          >
            Cadastre-se
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default Register;
