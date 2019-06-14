import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from 'Services/Firebase';
import { connect } from 'react-redux';

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
      return condition(this.props.authUser) ? (
        <Component {...this.props} />
      ) : null;
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
