'use strict';

import { createSelector } from 'reselect'

export const metaSelector = state => state.meta;
export const unitSelector = state => state.units;

export const appSelector = createSelector(
    metaSelector,
    unitSelector,
    (meta, units) => {
        return {
            name: meta.get('name'), 
            units
        };
    }
);
