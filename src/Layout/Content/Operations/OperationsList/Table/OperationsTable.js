import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import operationActions from 'Redux/Actions/operationActions';
import { withAuthorization } from 'Services/Session';
import OperationItem from './OperationItem/OperationItem';

class OperationsTable extends Component {
  componentDidMount() {
    if (this.props.operations.length === 0) {
      this.props.firebase.doGetOperations(this.props.authUser.uid).then(operations => {
        this.props.setOperations(operations);
      });
    }
  }

  render() {
    return (
      <Fragment>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Value</th>
              <th>Description</th>
              <th>Is Verified?</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.operations.map(operation => (
              <tr key={operation.uid}>
                <OperationItem operation={operation} />
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setOperations: operations => dispatch(operationActions.setOperations(operations)),
  editOperation: operation => dispatch(operationActions.editOperation(operation))
});

const mapStateToProps = state => ({
  operations: state.operationState.filteredOperations
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthorization()
)(OperationsTable);
