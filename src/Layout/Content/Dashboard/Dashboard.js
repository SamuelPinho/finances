import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withPageTitle } from 'Services/PageTitle';
import operationActions from 'Redux/Actions/operationActions';
import { withAuthorization } from 'Services/Session';
import Finances from 'Services/Business';

const INITIAL_STATE = {
  date: new Date().toLocaleDateString(),
  todayAmount: 0,
  payAmount: 0,
  receiveAmount: 0,
  applyAmount: 0
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.finances = new Finances();
  }

  componentDidMount() {
    const { operations } = this.props;

    if (operations.length === 0) {
      this.getOperations();
    } else {
      this.CalculateDayAmount();
    }
  }

  handleGetOperations = event => {
    event.preventDefault();

    this.getOperations();
  };

  getOperations = () => {
    const { firebase, authUser, setOperations } = this.props;

    firebase
      .doGetOperationsByDate(authUser.uid, this.state.date)
      .then(operations => {
        setOperations(operations);
        this.CalculateDayAmount();
      });
  };

  CalculateDayAmount = () => {
    const { authUser, operations } = this.props;

    const amounts = this.finances.doCalculateDayAmount(
      authUser.financialInformation.startingMoney,
      operations
    );

    this.setState({
      todayAmount: amounts.dayAmount.toFixed(2),
      payAmount: amounts.payAmount.toFixed(2),
      receiveAmount: amounts.receiveAmount.toFixed(2),
      applyAmount: amounts.applyAmount.toFixed(2)
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <div className="field is-horizontal">
          <div className="field-label is-medium">
            <label className="label">Data para Análise</label>
          </div>
          <div className="field-body">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input is-medium"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
              </div>
              <div class="control">
                <button
                  class="button is-info is-medium"
                  type="submit"
                  onClick={this.handleGetOperations}
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <nav className="level has-text-dark">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading is-size-5">Saldo Final</p>
              <p className="title is-size-2">R$ {this.state.todayAmount}</p>
            </div>
          </div>
          <div className="level-item has-text-centered has-text-danger">
            <div>
              <p className="heading is-size-5">Paguei</p>
              <p className="title is-size-2">R$ {this.state.payAmount}</p>
            </div>
          </div>
          <div className="level-item has-text-centered has-text-success">
            <div>
              <p className="heading is-size-5">Recebi</p>
              <p className="title is-size-2">R$ {this.state.receiveAmount}</p>
            </div>
          </div>
          <div className="level-item has-text-centered has-text-link">
            <div>
              <p className="heading is-size-5">Apliquei</p>
              <p className="title is-size-2">R$ {this.state.applyAmount}</p>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  operations: state.operationState.operations
});

const mapDispatchToProps = dispatch => ({
  setOperations: operations =>
    dispatch(operationActions.setOperations(operations))
});

export default compose(
  withPageTitle('Dashboard'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthorization()
)(Dashboard);
