import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Content from './Content/Content';
import Navbar from './Navbar/Navbar';
import Notification from './Notification/Notification';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <section className="hero is-link is-fullheight">
          <div className="hero-body">
            <div className="container">
              {this.props.notifications.map((notification, key) => (
                <Notification index={key} notification={notification} key={key} />
              ))}
              <div className="columns is-centered">
                <div className="column is-four-fifths">
                  <Navbar />
                  <Content />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notificationState.notifications
});

export default connect(mapStateToProps)(Layout);
