import React, { Component, Fragment } from 'react';

class Input extends Component {
  render() {
    return (
      <Fragment>
        <div className="field">
          <p className="control">
            <input
              className="input is-large column is-7"
              placeholder="R$ 0,00"
            />
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Input;
