import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton/LogoutButton';

class User extends Component {
  render() {
    return (
      <Fragment>
        <div className="dropdown is-hoverable is-right">
          <div className="dropdown-trigger">
            <button
              className="button is-rounded is-light"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>{this.props.authUser.profileInformation.firstName}</span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <Link className="dropdown-item" to="/user">
                My Profile
              </Link>
              <Link className="dropdown-item" to="/user/financial">
                Financial Data
              </Link>
              <hr className="dropdown-divider" />
              <LogoutButton />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
