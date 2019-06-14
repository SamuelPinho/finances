import React, { Component, Fragment } from 'react';

class Notification extends Component {
  render() {
    return (
      <Fragment>
        <p className="notification is-success" role="alert">
          <button class="delete" />
          Você se logou com sucesso!
        </p>
      </Fragment>
    );
  }
}

export default Notification;
