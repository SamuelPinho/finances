import React, { Component, Fragment } from 'react';
import { withAuthorization } from 'Services/Session';

const INITIAL_STATE = {
  operations: []
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
  }

  componentDidMount() {
    this.props.firebase
      .doGetOperations(this.props.authUser.uid)
      .then(operationsSnapshot => {
        operationsSnapshot.forEach(operation => {
          let newOperation = {
            ...operation.data(),
            uid: operation.id
          };

          this.setState({
            operations: [...this.state.operations, newOperation]
          });
        });
      });
  }

  render() {
    console.log(this.state.operations);

    return (
      <Fragment>
        <table className="table is-narrow is-hoverable is-fullwidth">
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
            {this.state.operations.map(operation => (
              <tr key={operation.uid}>
                <th>{operation.date}</th>
                <th>
                  <span className={'tag ' + types[operation.type]}>
                    {operation.type}
                  </span>
                </th>
                <th>{operation.value}</th>
                <th>{operation.description}</th>
                <th>{operation.isVerified}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default withAuthorization()(OperationsTable);
