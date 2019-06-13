import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

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
  setPageTitle: title => dispatch({ type: 'SET_TITLE', title })
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
