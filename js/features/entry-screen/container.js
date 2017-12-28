import { connect } from 'react-redux';
import React from 'react';
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

class EntryContainer extends React.Component {
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

  render() {
    return (
      <Entry
        name={this.props.name}
        goToCounter={this.goToCounter}
        goToTab={this.goToTabs}
        goToLogin={this.goToLogin}
        goToCoinScreen={this.goToCoinScreen}
      />
    );
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  EntryContainer
);

export default reduxContainer;
