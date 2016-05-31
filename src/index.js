'use strict';

import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';
import App from './App.react';
import { Provider } from 'react-redux'
import { appReducer } from './AppReducer';

const store = createStore(appReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);
