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
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  handleUpdate = () => {
    this.props.firebase.doUpdateOperation(this.props.authUser.uid, this.props.operation);
  };

  handleChange = () => {
    this.props.editOperation(this.props.operation);
  };

  handleClickToEdit = event => {
    event.preventDefault();

    const { isEditing } = this.state;

    if (isEditing) {
      this.props.editOperation(this.props.operation);
      this.props.firebase.doUpdateOperation(this.props.authUser.uid, this.props.operation);
    }

    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  render() {
    const { operation } = this.props;
    const { isEditing } = this.state;

    return (
      <Fragment>
        <th>
          <DateInput
            operation={operation}
            // handleUpdate={this.handleUpdate}
            disabled={!isEditing}
          />
        </th>
        <th>
          <Tags
            operation={operation}
            handleChange={this.handleChange}
            handleUpdate={this.handleUpdate}
          />
        </th>
        <th>
          <ValueInput
            operation={operation}
            handleUpdate={this.handleUpdate}
            handleChange={this.handleChange}
            disabled={!isEditing}
          />
        </th>
        <th>
          <DescriptionInput
            operation={operation}
            // handleUpdate={this.handleUpdate}
            // handleChange={this.handleChange}
            disabled={!isEditing}
          />
        </th>
        <th>
          <CheckboxInput
            operation={operation}
            handleUpdate={this.handleUpdate}
            handleChange={this.handleChange}
            disabled={!isEditing}
          />
        </th>
        <th>
          <button
            className={
              'button is-small ' + (isEditing ? 'is-success' : 'is-outlined is-dark')
            }
            onClick={this.handleClickToEdit}
          >
            {isEditing ? 'Salvar' : 'Editar'}
          </button>
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
