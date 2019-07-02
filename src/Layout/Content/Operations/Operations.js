import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'recompose';
import { withPageTitle } from 'Services/PageTitle';
import { withAuthorization } from 'Services/Session';
import OperationForm from './OperationForm/OperationForm';
import OperationsList from './OperationsList/OperationsList';

class Operations extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/operations/add" component={OperationForm} />
          <Route exact path="/operations" component={OperationsList} />
        </Switch>
      </Fragment>
    );
  }
}

export default compose(
  withPageTitle('Operations'),
  withAuthorization()
)(Operations);
