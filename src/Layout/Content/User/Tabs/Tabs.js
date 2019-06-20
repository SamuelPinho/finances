import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import { withAuthorization } from 'Services/Session';

function IsActive(props, rota) {
  if (props.location.pathname === rota) {
    return 'is-active';
  } else {
    return '';
  }
}

class Tabs extends Component {
  render() {
    return (
      <Fragment>
        <div className="tabs is-size-5">
          <ul>
            <li className={IsActive(this.props, '/usuario')}>
              <Link to="/usuario">Dados Gerais</Link>
            </li>
            <li className={IsActive(this.props, '/usuario/financeiro')}>
              <Link to="/usuario/financeiro">Dados Financeiros</Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default compose(withAuthorization())(Tabs);
