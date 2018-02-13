import { connect } from 'react-redux';
import PushNotification from 'react-native-push-notification';
import React from 'react';
import BaseContainer from '../../shared/base-container'
import { initializeApp } from '../../shared/app/actions';
import { navTypes } from '../../shared/const';
import pages from '../../navigation/pages';
import { getNavScreen } from '../../utils';
import Entry from './component';

const mapStateToProps = state => ({
  name: state.app.appName,
});

const mapDispatchToProps = dispatch => ({
  goToTabs: () => dispatch(initializeApp(navTypes.tab)),
});

class EntryContainer extends BaseContainer {
  goToCounter = () => {
    this.props.navigator.push(getNavScreen(pages.COUNTER));
  };

  goToTabs = () => {
    this.props.goToTabs();
  };

  goToLogin = () => {
    this.props.navigator.push(getNavScreen(pages.LOGIN));
  };

  goToCoinScreen = () => {
    this.props.navigator.push(getNavScreen(pages.COINS));
  };

  scheduleLocalNotification = () => {
    // Schedule notification 5 seconds in the future
    let date = new Date(Date.now() + (5 * 1000));

    PushNotification.localNotificationSchedule({
      message: "Scheduled Notification!",
      date,
    });
  };

  render() {
    return (
      <Entry
        name={this.props.name}
        goToCounter={this.goToCounter}
        goToTab={this.goToTabs}
        goToLogin={this.goToLogin}
        goToCoinScreen={this.goToCoinScreen}
        scheduleLocalNotification= {this.scheduleLocalNotification}
      />
    );
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  EntryContainer
);

export default reduxContainer;
