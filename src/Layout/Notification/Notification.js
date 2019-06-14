import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { notificationActions } from 'Redux/Actions';

class Notification extends Component {
  handleClick = event => {
    event.preventDefault();

    this.props.removeNotification(this.props.index);
  };

  render() {
    const { notification } = this.props;

    return (
      <Fragment>
        <p className={'notification is-' + notification.type} role="alert">
          <button className="delete" onClick={this.handleClick} />
          {notification.message}
        </p>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeNotification: index =>
    dispatch(notificationActions.removeNotification(index))
});

export default connect(
  null,
  mapDispatchToProps
)(Notification);
