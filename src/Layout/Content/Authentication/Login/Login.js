import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFirebase } from 'Services/Firebase';

const INITIAL_STATE = {
  email: '',
  senha: '',
  erro: '',
  sucesso: ''
};

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this.props.setPageTitle('Login');
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
          ...INITIAL_STATE,
          sucesso: 'Você logou com sucesso!'
        });
      })
      .catch(erro => {
        if (erro.code === 'auth/wrong-password') {
          erro.message = 'O e-mail ou a senha digitados estão incorretos.';
        }
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
            <label className="label">Senha</label>
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
  setPageTitle: title => dispatch({ type: 'SET_TITLE', title })
});

export default compose(
  withFirebase,
  connect(
    null,
    mapDispatchToProps
  )
)(Cadastro);
