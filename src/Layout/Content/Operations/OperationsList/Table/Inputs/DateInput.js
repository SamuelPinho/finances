import React, { Component, Fragment } from 'react';
import moment from 'moment';

const INITIAL_STATE = {
  date: ''
};

class DateInput extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  render() {
    let { date } = this.props;

    date = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');

    return (
      <Fragment>
        <input
          type="date"
          name="date"
          className="input is-small"
          defaultValue={date}
          onBlur={event => this.props.handleBlur(event, this.props.index)}
        />
      </Fragment>
    );
  }
}

export default DateInput;
