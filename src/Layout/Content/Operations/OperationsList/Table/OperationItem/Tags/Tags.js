import React, { Component, Fragment } from 'react';
import Tag from './Tag/Tag';

class Tags extends Component {
  handleClick = type => {
    this.props.operation.type = type;

    this.props.handleChange(this.props.operation);
    this.props.handleUpdate();
  };

  render() {
    const { type } = this.props.operation;

    return (
      <Fragment>
        <div className="field is-grouped is-grouped-multiline">
          <div className="control">
            <div className="tags has-addons">
              <Tag
                operationType={type}
                defaultType={'Receive'}
                handleClick={this.handleClick}
              />
              <Tag
                operationType={type}
                defaultType={'Pay'}
                handleClick={this.handleClick}
              />
              <Tag
                operationType={type}
                defaultType={'Apply'}
                handleClick={this.handleClick}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Tags;
