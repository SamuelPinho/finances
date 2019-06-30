import React, { Component, Fragment } from 'react';
import AuthenticationButtons from './AuthenticationButtons/AuthenticationButtons';
import NavigationButtons from './NavigationButtons/NavigationButtons';

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="level">
          <div className="level-left">
            <NavigationButtons />
          </div>
          <div className="level-right">
            <AuthenticationButtons />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
