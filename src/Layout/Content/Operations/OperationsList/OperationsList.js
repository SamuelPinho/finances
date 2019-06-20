import React, { Component, Fragment } from 'react';
import AddNewOperationButton from './ActionButtons/AddNewOperatationButton';
import OperationsTable from './Table/OperationsTable';

class OperationsList extends Component {
  render() {
    return (
      <Fragment>
        <AddNewOperationButton />
        <OperationsTable />
      </Fragment>
    );
  }
}

export default OperationsList;
