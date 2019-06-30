import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import { withAuthorization } from 'Services/Session';

function IsActive(props, rota) {
  if (props.location.pathname === rota) {
    return 'is-active';
  } else {
    return '';
  }
}

class Tabs extends Component {
  render() {
    return (
      <Fragment>
        <div className="tabs is-size-5">
          <ul>
            <li className={IsActive(this.props, '/user')}>
              <Link to="/user">General Data</Link>
            </li>
            <li className={IsActive(this.props, '/user/financial')}>
              <Link to="/user/financial">Financial Data</Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default compose(withAuthorization())(Tabs);
