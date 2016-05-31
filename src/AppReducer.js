'use strict';

import Immutable from 'immutable';
import { combineReducers } from 'redux';
import { CHANGE_NAME, ADD_UNIT } from './AppConstants';

const initialState = Immutable.fromJS({
    name: ''
});

function meta(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return state.set('name', action.payload);

        default:
            return state;
    }
}

function units(state = Immutable.Map(), action) {
    switch (action.type) {
        case ADD_UNIT:
            return state.set(
                action.payload.unitId,
                Immutable.fromJS(action.payload)
            );

        default:
            return state;
    }
}

export const appReducer = combineReducers({
    meta,
    units
});
