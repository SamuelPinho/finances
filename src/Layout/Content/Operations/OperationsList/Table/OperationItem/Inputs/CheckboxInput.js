import React, { Component, Fragment } from 'react';

class CheckboxInput extends Component {
  handleChange = () => {
    this.props.operation.isVerified = !this.props.operation.isVerified;

    this.props.handleChange();
  };

  render() {
    const { operation } = this.props;

    return (
      <Fragment>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={operation.isVerified}
                onChange={this.handleChange}
                onClick={this.props.handleUpdate}
                disabled={this.props.disabled}
              />
            </label>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CheckboxInput;
