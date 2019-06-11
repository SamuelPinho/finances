import React, { Component, Fragment } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <Fragment>
        <div className="control" style={{ width: '25rem' }}>
          <input className="input" placeholder="Buscar por uma operação" />
        </div>
      </Fragment>
    );
  }
}

export default SearchBar;
