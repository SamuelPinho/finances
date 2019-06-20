import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
  render() {
    return (
      <Fragment>
        <div className="control">
          <Link to="/usuario" className="button is-light is-rounded">
            Samuel Monteiro
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default User;
