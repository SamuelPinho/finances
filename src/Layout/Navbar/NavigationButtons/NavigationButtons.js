import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class NavigationButtons extends Component {
  render() {
    return (
      <Fragment>
        <div className="control">
          <Link
            className="button is-light is-rounded is-outlined"
            to="/operacoes"
          >
            Operações
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default NavigationButtons;
