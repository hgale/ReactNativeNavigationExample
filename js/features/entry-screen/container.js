import { connect } from 'react-redux';
import React from 'react';
import { initializeApp } from '../../shared/app/actions';
import { navTypes } from '../../shared/const';
import { pages } from '../../navigation/pages';
import { getNavScreen } from '../../utils';
import Entry from './component';

const mapStateToProps = state => {
  return {
    name: state.app.appName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToTabs: () => dispatch(initializeApp(navTypes.tab)),
  };
};

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

  render() {
    return (
      <Entry
        name={this.props.name}
        goToCounter={this.goToCounter}
        goToTab={this.goToTabs}
        goToLogin={this.goToLogin}
      />
    );
  }
}

// Instantiate and make the magic happen
const reduxContainer = connect(mapStateToProps, mapDispatchToProps)(
  EntryContainer
);

export default reduxContainer;
