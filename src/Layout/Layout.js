import React, { Component, Fragment } from 'react';
import Content from './Content/Content';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Notification from './Notification/Notification';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <section className="hero is-link is-fullheight">
          <div className="hero-body">
            <div className="container">
              <Notification />
              <div className="columns is-centered">
                <div className="column is-three-fifths">
                  <Navbar />
                  <Content />
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Layout;
