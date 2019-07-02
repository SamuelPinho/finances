import React from 'react';
import { connect } from 'react-redux';
import { pageTitleActions } from 'Redux/Actions';

const withPageTitle = pageTitle => Component => {
  class WithPageTitle extends React.Component {
    componentDidMount() {
      this.props.setPageTitle(pageTitle);
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    setPageTitle: title => dispatch(pageTitleActions.setPageTitle(title))
  });

  return connect(
    null,
    mapDispatchToProps
  )(WithPageTitle);
};

export default withPageTitle;
