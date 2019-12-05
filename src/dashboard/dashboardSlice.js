// Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  closed: false,
  locked: false
};

const toggleGate = createSlice({
  name: 'toggleGate',
  initialState,
  reducers: {
    toggleOpen(state) {
      return {
        ...state,
        closed: !state.closed
      };
    },
    toggleLock(state) {
      return {
        ...state,
        locked: !state.locked
      };
    }
  }
});

export const { toggleOpen, toggleLock } = toggleGate.actions;

export default toggleGate.reducer;
