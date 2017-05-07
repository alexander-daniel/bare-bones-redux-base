'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { appSelector } from './AppSelector';
import { changeName } from './AppActions';

class App extends React.Component {
  onClick() {
    this.props.dispatch(changeName('jaha'));
  }

  render() {

    return (
      <div onClick={this.onClick}>
        {`Hello ${this.props.name}`}
      </div>
    )
  }
}

const ConnectedApp = connect(
  appSelector
)(App);

export default ConnectedApp;
