import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

// const LOCATIONS = {
//   '/':
// }

class NavigationButtons extends Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <Fragment>
        <div className="field is-grouped">
          <div className="control">
            <Link
              className={
                'button is-light is-rounded ' +
                (pathname === '/' ? '' : 'is-outlined')
              }
              to="/"
            >
              Home Page
            </Link>
          </div>
          <div className="control">
            <Link
              className={
                'button is-light is-rounded ' +
                (pathname === '/operacoes' ? '' : 'is-outlined')
              }
              to="/operacoes"
            >
              Operações
            </Link>
          </div>
          <div className="control">
            <Link
              className={
                'button is-light is-rounded ' +
                (pathname === '/dashboard' ? '' : 'is-outlined')
              }
              to="/dashboard"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(NavigationButtons);
