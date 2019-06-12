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

const stepOne = ({ props }) => {
  return (
    <Fragment>
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
      {props.children}
      <p className="help has-text-grey">
        Fique tranquilo que o <strong>tesouro direto</strong>, a
        <strong> poupança</strong>, <strong>ações</strong> e{' '}
        <strong>outros investimentos</strong> entram numa próxima pergunta.
      </p>
    </Fragment>
  );
};

const stepTwo = ({ props }) => {
  return (
    <Fragment>
      <p className="is-size-4">
        <span className="has-text-weight-bold">
          Agora, quanto você possui investido e que deseja monitorar?
        </span>
        <br />
        <span>
          Tesouro direto, valor em ações, CDB, poupanças, entre outras
          aplicações.
        </span>
      </p>
      {props.children}
      <p className="help has-text-grey">
        Você poderá <strong>dividir esse valor total</strong> para cada uma das
        aplicações no próximo passo.
      </p>
    </Fragment>
  );
};

export default Text;
