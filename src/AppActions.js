'use strict';

import { createAction } from 'redux-actions';
import { CHANGE_NAME, ADD_UNIT } from './AppConstants';

export const changeName = createAction(CHANGE_NAME);
export const addUnit = createAction(ADD_UNIT);
