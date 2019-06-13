import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Title extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title has-text-grey-darker">{this.props.title}</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  title: state.pageTitleState.title
});

export default connect(mapStateToProps)(Title);
