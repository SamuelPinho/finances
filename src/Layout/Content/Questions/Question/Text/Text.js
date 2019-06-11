import React, { Component, Fragment } from 'react';

class Text extends Component {
  render() {
    return (
      <Fragment>
        <div className="content">
          <p className="is-size-4">
            <span className="has-text-weight-bold">
              Quanto você tem de dinheiro que deseja monitorar e que pode ter
              movimentações constantes?
            </span>
            <br />
            <span>
              Contas corrente e dinheiro no bolso são bons lugares para começar.
            </span>
          </p>
          {this.props.children}
          <p className="help has-text-grey">
            Fique tranquilo que o <strong>tesouro direto</strong>, a
            <strong> poupança</strong>, <strong>ações</strong> e{' '}
            <strong>outros investimentos</strong> entram numa próxima pergunta.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Text;
