import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { pageTitleActions } from 'Redux/Actions';

class Home extends Component {
  componentDidMount() {
    this.props.setPageTitle('Home');
  }

  render() {
    return (
      <Fragment>
        <p>Bem vindo ao site</p>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPageTitle: title => dispatch(pageTitleActions.setPageTitle(title))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
