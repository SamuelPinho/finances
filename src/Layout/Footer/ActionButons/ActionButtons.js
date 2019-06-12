import React, { Component, Fragment } from 'react';
import { withFirebase } from 'Services/Firebase';

class ActionButtons extends Component {
  handleClick = event => {
    event.preventDefault();

    this.props.firebase.doSignOut();
  };

  render() {
    return (
      <Fragment>
        <div className="level-item">
          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-danger is-rounded"
                onClick={this.handleClick}
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withFirebase(ActionButtons);
