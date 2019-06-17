import React, { Component, Fragment } from 'react';

class OperationsTable extends Component {
  render() {
    return (
      <Fragment>
        <table className="table is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Descrição</th>
              <th>Verificado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Sábado 15/06/19</th>
              <th>Recebo</th>
              <th>R$ 1171,20</th>
              <th>40% do Salário</th>
              <th>[]</th>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default OperationsTable;
