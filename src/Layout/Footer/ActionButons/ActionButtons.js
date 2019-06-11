import React, { Component, Fragment } from 'react';

class ActionButtons extends Component {
  render() {
    return (
      <Fragment>
        <div className="level-item">
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link is-rounded">Cancelar</button>
            </div>
            <div className="control">
              <button className="button is-success is-rounded">Próximo</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ActionButtons;
