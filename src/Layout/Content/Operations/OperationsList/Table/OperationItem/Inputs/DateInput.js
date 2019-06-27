import React, { Component, Fragment } from 'react';
import moment from 'moment';

class DateInput extends Component {
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
          disabled={this.props.disabled}
        />
      </Fragment>
    );
  }
}

export default DateInput;
