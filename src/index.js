import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles/theme.scss';
import Layout from './Layout/Layout';

class App extends Component {
  render() {
    return <Layout />;
  }
}

render(<App />, document.getElementById('root'));
