import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLock, toggleOpen } from '../dashboard/dashboardSlice';

const Controls = () => {
  const { locked, closed } = useSelector(state => state.toggleGate);
  const dispatch = useDispatch();

  return (
    <div className="controls panel">
      <button type="button" disabled={!closed} onClick={() => dispatch(toggleLock(locked))} className="toggle-btn">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button type="button" disabled={locked} onClick={() => dispatch(toggleOpen(closed))} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;
