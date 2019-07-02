import React, { Component, Fragment } from 'react';

const formatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

class ValueInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  handleChange = event => {
    event.preventDefault();

    this.props.operation.value = event.target.value;

    this.props.handleChange(this.props.operation);
  };

  handleClick = event => {
    this.setState({ isEditing: true });
  };

  handleBlur = event => {
    this.props.operation.value = parseFloat(this.props.operation.value.replace(',', '.'));

    this.setState({ isEditing: false });
  };

  render() {
    let { value } = this.props.operation;

    if (!this.state.isEditing) {
      value = formatter.format(value);
    }

    return (
      <Fragment>
        <input
          className="input is-small"
          value={value}
          onChange={this.handleChange}
          onClick={this.handleClick}
          onBlur={this.handleBlur}
          disabled={this.props.disabled}
        />
      </Fragment>
    );
  }
}

export default ValueInput;
