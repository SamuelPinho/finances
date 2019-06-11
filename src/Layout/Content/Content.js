import React, { Component, Fragment } from 'react';
import Questions from './Questions/Questions';
import Title from './Title/Title';

class Content extends Component {
  render() {
    return (
      <Fragment>
        <div className="box">
          <Title />
          <hr />
          <Questions />
        </div>
      </Fragment>
    );
  }
}

export default Content;
