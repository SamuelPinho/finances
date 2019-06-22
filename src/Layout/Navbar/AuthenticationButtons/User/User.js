import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton/LogoutButton';

class User extends Component {
  render() {
    return (
      <Fragment>
        <div class="dropdown is-hoverable is-right">
          <div class="dropdown-trigger">
            <button
              class="button is-rounded is-light"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>Samuel Monteiro</span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <Link class="dropdown-item" to="/usuario">
                Meu Perfil
              </Link>
              <Link class="dropdown-item" to="/usuario/financeiro">
                Dados Financeiros
              </Link>
              <hr class="dropdown-divider" />
              <LogoutButton />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
