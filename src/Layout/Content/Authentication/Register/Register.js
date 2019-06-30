import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFirebase } from 'Services/Firebase';
import { withPageTitle } from 'Services/PageTitle';
import { notificationActions } from 'Redux/Actions';

const INITIAL_STATE = {
  primeiroNome: '',
  email: '',
  senha: '',
  erro: '',
  sucesso: ''
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { primeiroNome, email, senha } = this.state;

    this.props.firebase
      .doCreateUser(email, senha, primeiroNome)
      .then(obj => {
        this.setState({ ...INITIAL_STATE });

        this.props.addNotification({
          message: obj.message,
          type: obj.type
        });
      })
      .catch(obj => {
        this.setState({ erro: obj.message });

        this.props.addNotification({
          message: obj.message,
          type: obj.type
        });
      });
  };

  render() {
    const { primeiroNome, email, senha, erro, sucesso } = this.state;

    // passar essa lógica para o redux
    const isDisabled = primeiroNome === '' || email === '' || senha === '';

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input column is-5"
                type="text"
                name="primeiroNome"
                value={primeiroNome}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">E-Mail</label>
            <div className="control">
              <input
                className="input column is-5"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input column is-5"
                type="password"
                name="senha"
                value={senha}
                onChange={this.handleChange}
              />
            </div>
            <p className="help is-danger">{erro}</p>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-success" disabled={isDisabled} type="submit">
                Register
              </button>
            </div>
            <p className="help is-success">{sucesso}</p>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNotification: notification =>
    dispatch(notificationActions.addNotification(notification))
});

export default compose(
  withFirebase,
  withPageTitle('Register'),
  connect(
    null,
    mapDispatchToProps
  )
)(Register);
