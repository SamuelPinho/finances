import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withAuthorization } from 'Services/Session';
import operationActions from 'Redux/Actions/operationActions';
import Finances from 'Services/Business';

const INITIAL_STATE = {
  operations: [],
  dayAmount: 0
};

const types = {
  Pago: 'is-danger',
  Recebo: 'is-success',
  Aplico: 'is-link'
};

class OperationsTable extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.finances = new Finances();
  }

  componentDidMount() {
    this.props.firebase
      .doGetOperations(this.props.authUser.uid)
      .then(operationsSnapshot => {
        let operations = [];
        operationsSnapshot.forEach(operation => {
          let newOperation = {
            ...operation.data(),
            uid: operation.id
          };

          newOperation.date = newOperation.date.toDate().toLocaleDateString();

          operations = [...operations, newOperation];
        });

        this.props.setOperations(operations);
      });
  }

  render() {
    return (
      <Fragment>
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Descrição</th>
              <th>Verificado</th>
            </tr>
          </thead>
          <tbody>
            {this.props.operations.map(operation => (
              <tr key={operation.uid}>
                <th>{operation.date}</th>
                <th>
                  <span className={'tag ' + types[operation.type]}>
                    {operation.type}
                  </span>
                </th>
                <th>{operation.value}</th>
                <th>{operation.description}</th>
                <th>
                  <div className="field">
                    <div className="control">
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          checked={operation.isVerified}
                          readOnly
                        />
                      </label>
                    </div>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setOperations: operations =>
    dispatch(operationActions.setOperations(operations))
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
