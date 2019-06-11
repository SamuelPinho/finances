import React, { Component, Fragment } from 'react';
import AuthenticationButtons from './AuthenticationButtons/AuthenticationButtons';
import SearchBar from './SearchBar/SearchBar';

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="level">
          <div className="level-left">
            <SearchBar />
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
