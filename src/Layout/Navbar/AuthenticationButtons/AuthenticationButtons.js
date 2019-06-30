import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoginButton from './Login/LoginButton';
import RegisterButton from './Register/RegisterButton';
import User from './User/User';

function Buttons(props) {
  const authUser = props.authUser;
  if (authUser) {
    return <User authUser={authUser} />;
  } else {
    return (
      <Fragment>
        <LoginButton />
        <RegisterButton />
      </Fragment>
    );
  }
}

class AuthenticationButtons extends Component {
  render() {
    const { authUser } = this.props;

    return (
      <Fragment>
        <div className="level-item">
          <div className="field is-grouped">
            <Buttons authUser={authUser} />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(AuthenticationButtons);
