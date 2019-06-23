import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import moment from 'moment';
import operationActions from 'Redux/Actions/operationActions';
import { withAuthorization } from 'Services/Session';
import Finances from 'Services/Business';
import DateInput from './Inputs/DateInput';

const INITIAL_STATE = {
  operations: []
};

const types = {
  Pago: 'is-danger',
  Recebo: 'is-success',
  Aplico: 'is-link'
};

function Tag(props) {
  if (props.type === props.desiredType) {
    return (
      <span className={'tag ' + types[props.desiredType]}>
        {props.desiredType}
      </span>
    );
  } else {
    return <span className="tag is-light">{props.desiredType}</span>;
  }
}

var formatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

class OperationsTable extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.finances = new Finances();
  }

  componentDidMount() {
    if (this.props.operations.length === 0) {
      this.props.firebase
        .doGetOperations(this.props.authUser.uid)
        .then(operations => {
          this.props.setOperations(operations);
        });
    }
  }

  handleDateBlur = (event, index) => {
    let operation = this.props.operations[index];

    this.props.operations[index].date = moment(
      event.target.value,
      'YYYY-MM-DD'
    ).format('DD/MM/YYYY');

    this.props.firebase.doUpdateOperation(
      this.props.authUser.uid,
      operation.uid,
      operation.description,
      operation.value,
      operation.type,
      event.target.value,
      operation.isVerified
    );
  };

  render() {
    return (
      <Fragment>
        <table className="table is-fullwidth">
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
            {this.props.operations.map((operation, index) => (
              <tr key={operation.uid}>
                <th>
                  <DateInput
                    date={operation.date}
                    index={index}
                    handleBlur={this.handleDateBlur}
                  />
                </th>
                <th>
                  <div className="field is-grouped is-grouped-multiline">
                    <div className="control">
                      <div className="tags has-addons">
                        <Tag type={operation.type} desiredType={'Recebo'} />
                        <Tag type={operation.type} desiredType={'Pago'} />
                        <Tag type={operation.type} desiredType={'Aplico'} />
                      </div>
                    </div>
                  </div>
                </th>
                <th>
                  <input
                    value={formatter.format(operation.value)}
                    className="input is-small"
                  />
                </th>
                <th>
                  <input
                    className="input is-small"
                    value={operation.description}
                  />
                </th>
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
