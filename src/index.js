import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Redux/Store';
import { BrowserRouter } from 'react-router-dom';
import Firebase, { FirebaseContext } from 'Services/Firebase';
import './styles/theme.scss';
import Layout from './Layout/Layout';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <FirebaseContext.Provider value={new Firebase()}>
            <Layout />
          </FirebaseContext.Provider>
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
