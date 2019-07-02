import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import SearchBar from 'Layout/Content/Title/SearchBar';

function PageTitle(props) {
  if (props.title !== '') {
    return <h1 className="title has-text-grey-darker">{props.title}</h1>;
  } else {
    return '';
  }
}

class Title extends Component {
  render() {
    const { pathname } = this.props.location;

    return (
      <Fragment>
        <div className="columns">
          <div className="column is-narrow">
            <PageTitle title={this.props.title} />
          </div>
          {pathname === '/operacoes' ? (
            <div className="column is-narrow">
              <SearchBar />
            </div>
          ) : (
            ''
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  title: state.pageTitleState.title
});

export default compose(
  connect(mapStateToProps),
  withRouter
)(Title);
