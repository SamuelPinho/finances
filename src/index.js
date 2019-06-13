import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Firebase, { FirebaseContext } from 'Services/Firebase';
import './styles/theme.scss';
import Layout from './Layout/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <FirebaseContext.Provider value={new Firebase()}>
          <Layout />
        </FirebaseContext.Provider>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
