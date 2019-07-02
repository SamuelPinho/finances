import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withFirebase } from 'Services/Firebase';
import { withPageTitle } from 'Services/PageTitle';
import { withAuthorization } from 'Services/Session';
import { notificationActions } from 'Redux/Actions';

const INITIAL_STATE = {
  email: '',
  senha: '',
  erro: ''
};

class Cadastro extends Component {
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
    const { email, senha } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, senha)
      .then(() => {
        this.setState({
          ...INITIAL_STATE
        });

        this.props.addNotification({
          message: "You're now logged in",
          type: 'success'
        });

        this.props.history.push('/');
      })
      .catch(erro => {
        if (erro.code === 'auth/wrong-password') {
          erro.message = 'The email or the password are wrong.';
        }

        this.props.addNotification({
          message: erro.message,
          type: 'danger'
        });

        this.setState({ erro: erro.message });
      });
  };

  render() {
    const { email, senha, erro, sucesso } = this.state;

    // passar essa lógica para o redux
    const isDisabled = email === '' || senha === '';

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
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
              <button className="button is-success" disabled={isDisabled}>
                Login
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

const condition = authUser => authUser === null;

export default compose(
  withFirebase,
  withAuthorization(condition),
  withPageTitle('Login'),
  connect(
    null,
    mapDispatchToProps
  )
)(Cadastro);
