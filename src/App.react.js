'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { appSelector } from './AppSelector';
import { changeName } from './AppActions';

const App = React.createClass({
    onClick() {
        this.props.dispatch(changeName('jaha'));
    },
    render() {

        return (
            <div onClick={this.onClick}>
                {`Hello ${this.props.name}`}
            </div>
        )
    }
});

const ConnectedApp = connect(
    appSelector
)(App);

export default ConnectedApp;
