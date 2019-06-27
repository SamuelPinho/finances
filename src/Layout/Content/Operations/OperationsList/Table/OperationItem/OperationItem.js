import React, { Component, Fragment } from 'react';
import DateInput from './Inputs/DateInput';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import DescriptionInput from './Inputs/DescriptionInput';
import operationActions from 'Redux/Actions/operationActions';
import { withAuthorization } from 'Services/Session';
import Tags from './Tags/Tags';
import ValueInput from './Inputs/ValueInput';
import CheckboxInput from './Inputs/CheckboxInput';

class OperationItem extends Component {
  handleUpdate = () => {
    this.props.firebase.doUpdateOperation(this.props.authUser.uid, this.props.operation);
  };

  handleChange = () => {
    this.props.editOperation(this.props.operation);
  };

  handlethat = event => {
    console.log(event.target.value);
  };

  render() {
    const { operation } = this.props;

    return (
      <Fragment>
        <th>
          <DateInput
            operation={operation}
            handleUpdate={this.handleUpdate}
            handleChange={this.handleChange}
          />
        </th>
        <th>
          <div className="field is-grouped is-grouped-multiline">
            <div className="control">
              <Tags
                operation={operation}
                handleChange={this.handleChange}
                handleUpdate={this.handleUpdate}
              />
            </div>
          </div>
        </th>
        <th>
          <ValueInput
            operation={operation}
            handleUpdate={this.handleUpdate}
            handleChange={this.handleChange}
          />
        </th>
        <th>
          <DescriptionInput
            operation={operation}
            handleUpdate={this.handleUpdate}
            handleChange={this.handleChange}
          />
        </th>
        <th>
          <CheckboxInput
            operation={operation}
            handleUpdate={this.handleUpdate}
            handleChange={this.handleChange}
          />
        </th>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editOperation: operation => dispatch(operationActions.editOperation(operation))
});

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withAuthorization()
)(OperationItem);
