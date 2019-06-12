import React, { Component, Fragment } from 'react';
import { withFirebase } from 'Services/Firebase';

const INITIAL_STATE = {
  primeiroNome: '',
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { primeiroNome, email, senha } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, senha)
      .then(authUser => {
        console.log(authUser);
        this.props.firebase.usersCollection.doc(authUser.user.uid).set({
          primeiroNome,
          email
        });
      })
      .then(() => {
        this.setState({
          ...INITIAL_STATE,
          sucesso: 'Você foi cadastrado com sucesso'
        });
      })
      .catch(erro => {
        this.setState({ erro });
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
            <label className="label">Primeiro Nome</label>
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
              <button
                className="button is-success"
                disabled={isDisabled}
                type="submit"
              >
                Cadastre-se
              </button>
            </div>
            <p className="help is-success">{sucesso}</p>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default withFirebase(Cadastro);
