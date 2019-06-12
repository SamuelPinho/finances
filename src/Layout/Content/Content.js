import React, { Component, Fragment } from 'react';
import { withAuthentication } from 'Services/Session';
// import Questions from './Questions/Questions';
import Title from './Title/Title';
import Authentication from './Authentication/Authentication';

class Content extends Component {
  render() {
    return (
      <Fragment>
        <div className="box">
          <Title />
          {/* <Questions /> */}
          <Authentication />
        </div>
      </Fragment>
    );
  }
}

export default withAuthentication(Content);
