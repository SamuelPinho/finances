import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withPageTitle } from 'Services/PageTitle';
import { withAuthorization } from 'Services/Session';
import { notificationActions } from 'Redux/Actions';

const INITIAL_STATE = {
  descricao: '',
  valor: '',
  tipo: 'Pay',
  data: '',
  isVerificado: false
};

class OperationForm extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckChange = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  };

  handleClick = event => {
    const { descricao, valor, tipo, data, isVerificado } = this.state;
    const { authUser, firebase } = this.props;
    event.preventDefault();

    firebase
      .doAddOperation(authUser.uid, descricao, valor, tipo, data, isVerificado)
      .then(() => {
        this.setState({ ...INITIAL_STATE });

        this.props.addNotification({
          message: 'Operation added with success',
          type: 'success'
        });
      })
      .catch(erro => {
        this.props.addNotification({
          message: 'Something went wrong',
          type: 'danger'
        });
      });
  };

  render() {
    const { descricao, valor, tipo, data, isVerificado } = this.state;

    return (
      <Fragment>
        <div className="field">
          <label className="label">Operation Description</label>
          <div className="control">
            <input
              className="input"
              name="descricao"
              value={descricao}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <label className="label">Value in R$</label>
        <div className="field has-addons">
          <p className="control">
            <input
              className="input"
              name="valor"
              type="text"
              placeholder="R$ 0,00"
              value={valor}
              onChange={this.handleChange}
            />
          </p>
          <p className="control">
            <span className="select">
              <select name="tipo" onChange={this.handleChange} value={tipo}>
                <option value="Pago">Pay</option>
                <option value="Recebo">Receive</option>
                <option value="Aplico">Apply</option>
              </select>
            </span>
          </p>
        </div>

        <div className="field">
          <label className="label">Date that will occur</label>
          <div className="control">
            <input
              className="input "
              name="data"
              type="date"
              value={data}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                name="isVerificado"
                type="checkbox"
                checked={isVerificado}
                onChange={this.handleCheckChange}
              />
              Verified
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={this.handleClick}>
              Add
            </button>
          </div>
          <div className="control">
            <Link className="button is-text" to="/operacoes">
              Go Back
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNotification: notification =>
    dispatch(notificationActions.addNotification(notification))
});

export default compose(
  withAuthorization(),
  withPageTitle('Add Operation'),
  connect(
    null,
    mapDispatchToProps
  )
)(OperationForm);
