import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withPageTitle } from 'Services/PageTitle';

const INITIAL_STATE = {
  descricao: '',
  valor: '',
  tipo: 'Recebo',
  data: '',
  verificado: true
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
    event.preventDefault();

    // add logic to add the operation
  };

  render() {
    const { descricao, valor, tipo, data, verificado } = this.state;

    return (
      <Fragment>
        <div className="field">
          <label className="label">Descrição da Operação</label>
          <div className="control">
            <input
              className="input"
              name="descricao"
              value={descricao}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <label className="label">Valor em R$</label>
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
                <option value="Pago">Pago</option>
                <option value="Recebo">Recebo</option>
                <option value="Aplico">Aplico</option>
              </select>
            </span>
          </p>
        </div>

        <div className="field">
          <label className="label">Data que irá ocorrer</label>
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
                name="verificado"
                type="checkbox"
                checked={verificado}
                onChange={this.handleCheckChange}
              />
              Verificado
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={this.handleClick}>
              Adicionar
            </button>
          </div>
          <div className="control">
            <Link className="button is-text" to="/operacoes">
              Voltar
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withPageTitle('Adicionar Operação')(OperationForm);
