import React, { Component, Fragment } from 'react';
import Input from './Input/Input';
import Text from './Text/Text';

class Question extends Component {
  render() {
    return (
      <Fragment>
        <Text>
          <Input />
        </Text>
      </Fragment>
    );
  }
}

export default Question;
