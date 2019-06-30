import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class AddNewOperationButton extends Component {
  render() {
    return (
      <Fragment>
        <div className="field">
          <div className="control">
            <Link to="/operations/add" className="button is-link is-outlined is-rounded">
              Add Operation
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddNewOperationButton;
