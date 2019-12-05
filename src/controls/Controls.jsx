import React from 'react';

const Controls = ({ locked, closed, toggleLocked, toggleClosed }) => {
  return (
    <div className="controls panel">
      <button type="button" disabled={!closed} onClick={toggleLocked} className="toggle-btn">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button type="button" disabled={locked} onClick={toggleClosed} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;
