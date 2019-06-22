import React, { Component, Fragment } from 'react';
import { withAuthorization } from 'Services/Session';
import AuthenticationButtons from './AuthenticationButtons/AuthenticationButtons';
import SearchBar from './SearchBar/SearchBar';
import NavigationButtons from './NavigationButtons/NavigationButtons';

function Navigation(props) {
  if (props.location.pathname === '/operacoes') {
    return <SearchBar />;
  } else {
    return <NavigationButtons />;
  }
}

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="level">
          <div className="level-left">
            <Navigation location={this.props.location} />
          </div>
          <div className="level-right">
            <AuthenticationButtons />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withAuthorization()(Navbar);
