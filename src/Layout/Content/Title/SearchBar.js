import React, { Component, Fragment } from 'react';
import operationActions from 'Redux/Actions/operationActions';
import { connect } from 'react-redux';
import { compose } from 'recompose';

class SearchBar extends Component {
  handleChange = event => {
    event.preventDefault();

    this.props.search(event.target.value);
  };

  render() {
    return (
      <Fragment>
        <div className="control" style={{ width: '25rem' }}>
          <input
            className="input"
            placeholder="Buscar por uma operação"
            onChange={this.handleChange}
          />
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  search: text => dispatch(operationActions.searchOperation(text))
});

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(SearchBar);
