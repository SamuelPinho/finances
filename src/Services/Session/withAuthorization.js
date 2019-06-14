import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from 'Services/Firebase';
import { connect } from 'react-redux';
import AuthUserContext from './context';

const defaultCondition = authUser => !!authUser;

const withAuthorization = (condition = defaultCondition) => Component => {
  class WithAuthorizion extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          if (!condition(authUser)) {
            this.props.history.push('/login');
          }
        },
        () => this.props.history.push('/login')
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            condition(authUser) ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
  });

  return compose(
    withRouter,
    withFirebase,
    connect(mapStateToProps)
  )(WithAuthorizion);
};

export default withAuthorization;
