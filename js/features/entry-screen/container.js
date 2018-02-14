import { connect } from 'react-redux';
import DeviceInfo from 'react-native-device-info';
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
    if (DeviceInfo.isEmulator()) {
      window.alert('This only works on a devie!');
      return;
    }
    // Schedule notification 5 seconds in the future
    let date = new Date(Date.now() + (5 * 1000));

    PushNotification.localNotificationSchedule({
      message: "Scheduled Notification!",
      date,
    });
  };
  
  promptNotificationPermission = () => {
    if (DeviceInfo.isEmulator()) {
      window.alert('This only works on a devie!');
      return;
    }
    // Push notification related code
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
      },
    });
  }

  render() {
    return (
      <Entry
        name={this.props.name}
        goToCounter={this.goToCounter}
        goToTab={this.goToTabs}
        goToLogin={this.goToLogin}
        goToCoinScreen={this.goToCoinScreen}
        scheduleLocalNotification={this.scheduleLocalNotification}
        promptNotificationPermission={this.promptNotificationPermission}
      />
    );
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  EntryContainer
);

export default reduxContainer;
