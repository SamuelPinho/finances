import React, { Component, Fragment } from 'react';

const types = {
  Pay: 'is-danger',
  Receive: 'is-success',
  Apply: 'is-link'
};

class Tag extends Component {
  render() {
    const { operationType, defaultType, handleClick } = this.props;

    return (
      <Fragment>
        {operationType === defaultType ? (
          <span className={'tag ' + types[defaultType]}>{defaultType}</span>
        ) : (
          <span
            className="tag is-light"
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick(defaultType)}
          >
            {defaultType}
          </span>
        )}
      </Fragment>
    );
  }
}

export default Tag;
