import React, { Component, Fragment } from 'react';
import moment from 'moment';

class DateInput extends Component {
  handleChange = event => {
    event.preventDefault();

    // this.props.operation.date = moment(event.target.value, 'YYYY-MM-DD').format(
    //   'DD/MM/YYYY'
    // );

    // this.props.handleChange(this.props.operation);
  };

  handleBlur = event => {
    event.preventDefault();

    this.props.operation.date = event.target.value;

    this.props.handleUpdate();
  };

  render() {
    let { date } = this.props.operation;

    date = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');

    return (
      <Fragment>
        <input
          type="date"
          name="date"
          className="input is-small"
          defaultValue={date}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
      </Fragment>
    );
  }
}

export default DateInput;
