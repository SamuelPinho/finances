import React, { Component } from 'react';
import { render } from 'react-dom';
import Firebase, { FirebaseContext } from 'Services/Firebase';
import './styles/theme.scss';
import Layout from './Layout/Layout';

class App extends Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <Layout />
      </FirebaseContext.Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
