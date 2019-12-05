// Redux Toolkit
import { combineReducers } from '@reduxjs/toolkit';
// Reducers
import toggleGate from './dashboard/dashboardSlice';

const rootReducer = combineReducers({
  toggleGate
});

export default rootReducer;
