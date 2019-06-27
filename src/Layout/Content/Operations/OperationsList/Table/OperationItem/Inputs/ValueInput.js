import React, { Component, Fragment } from 'react';

const formatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

class ValueInput extends Component {
  handleChange = event => {
    event.preventDefault();

    this.props.operation.value = event.target.value;

    this.props.handleChange();
  };

  render() {
    const { operation } = this.props;

    return (
      <Fragment>
        <input
          className="input is-small"
          value={formatter.format(operation.value)}
          onChange={this.handleChange}
          onBlur={this.props.handleUpdate}
          disabled={this.props.disabled}
        />
      </Fragment>
    );
  }
}

export default ValueInput;
