import React, { Component, Fragment } from 'react';
import Tabs from './Tabs/Tabs';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';
import { withAuthorization } from 'Services/Session';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import FinancialInformation from './FinancialInformation/FinancialInformation';

class User extends Component {
  render() {
    return (
      <Fragment>
        <Tabs />
        <Switch>
          <Route path="/usuario" exact component={ProfileInformation} />
          <Route path="/usuario/financeiro" component={FinancialInformation} />
        </Switch>
      </Fragment>
    );
  }
}

export default compose(withAuthorization())(User);
