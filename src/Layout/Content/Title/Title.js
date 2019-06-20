import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

function PageTitle(props) {
  console.log(props);
  if (props.title !== '') {
    return <h1 className="title has-text-grey-darker">{props.title}</h1>;
  } else {
    return '';
  }
}

class Title extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle title={this.props.title} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  title: state.pageTitleState.title
});

export default connect(mapStateToProps)(Title);
