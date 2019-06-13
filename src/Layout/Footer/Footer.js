import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ActionButtons from './ActionButons/ActionButtons';

class Footer extends Component {
  render() {
    const { authUser } = this.props;

    return (
      <Fragment>
        <div className="level">
          <div className="level-left" />
          <div className="level-right">{authUser && <ActionButtons />}</div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Footer);
