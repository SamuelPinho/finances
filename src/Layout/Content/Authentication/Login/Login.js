import React, { Component, Fragment } from 'react';

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    // colocar a lógica de logar o usuário ao firebase
  };

  render() {
    const { email, senha } = this.state;

    // passar essa lógica para o redux
    const isDisabled = email === '' || senha === '';

    return (
      <Fragment>
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
        </div>
      </Fragment>
    );
  }
}

export default Cadastro;
