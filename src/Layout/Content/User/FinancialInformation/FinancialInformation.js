import React, { Component, Fragment } from 'react';
import { withAuthorization } from 'Services/Session';
import { notificationActions } from 'Redux/Actions';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const INITIAL_STATE = {
  startingMoney: ''
};

class FinancialInformation extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this.setState({
      startingMoney: this.props.authUser.financialInformation.startingMoney
    });
  }

  handleChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    const { firebase, authUser } = this.props;
    event.preventDefault();

    // implementar para salvar no firebase'
    firebase
      .doAddFinancialInformation(authUser.uid, this.state.startingMoney)
      .then(returnMessage => {
        this.props.addNotification(returnMessage);
      })
      .catch(returnMessage => {
        this.props.addNotification(returnMessage);
      });
  };

  render() {
    return (
      <Fragment>
        <div className="field">
          <label className="label">Initial Value</label>
          <div className="control">
            <input
              className="input column is-4"
              placeholder="R$ 0,00"
              name="startingMoney"
              value={this.state.startingMoney}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-success" onClick={this.handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNotification: notification =>
    dispatch(notificationActions.addNotification(notification))
});

export default compose(
  withAuthorization(),
  connect(
    null,
    mapDispatchToProps
  )
)(FinancialInformation);
