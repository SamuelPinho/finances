import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class AddNewOperationButton extends Component {
  render() {
    return (
      <Fragment>
        <div className="field">
          <div className="control">
            <Link
              to="/operacoes/adicionar"
              className="button is-link is-outlined is-rounded"
            >
              Adicionar Operação
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddNewOperationButton;
