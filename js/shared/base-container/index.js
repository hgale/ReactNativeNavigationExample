/**
 * base container used to handle deep linking. All containers extend from this
 */
import React from 'react'

import { getNavScreen } from '../../utils';

export default class BaseContainer extends React.Component {
  constructor (props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    // handle a deep link, other events like nav bar can also be handled in here
    if (event.type == 'DeepLink') {
      let screen = getNavScreen(event.link);
      if (event.payload) {
        // Append token if present in payload
        screen.passProps = { token : event.payload };
      }
      this.props.navigator.push(screen);
    }
  }
}
