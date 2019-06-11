import React, { Component, Fragment } from 'react';
import ActionButtons from './ActionButons/ActionButtons';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="level">
          <div className="level-left" />
          <div className="level-right">
            <ActionButtons />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
