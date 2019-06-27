import React, { Component, Fragment } from 'react';

class DescriptionInput extends Component {
  handleChange = event => {
    event.preventDefault();

    this.props.operation.description = event.target.value;

    this.props.handleChange();
  };

  render() {
    return (
      <Fragment>
        <input
          className="input is-small"
          type="text"
          value={this.props.operation.description}
          onChange={this.handleChange}
          onBlur={this.props.handleUpdate}
        />
      </Fragment>
    );
  }
}

export default DescriptionInput;
